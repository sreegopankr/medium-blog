import { Blog } from "../hooks"
import { Appbar } from "./Appbar"
import { Avatar } from "./BlogCard"

export const FullBlog = ({blog}: {blog: Blog} ) =>{
    return <div>
        <Appbar/>
        <div className="flex px-20 pt-10">
        <div className=" w-2/3 flex flex-col pr-5">
            <div className=" text-5xl font-extrabold">
                {blog.title}
            </div>
            <div className="text-sm font-semibold text-slate-600 pt-2">
                Posted on April 11 2024
            </div>
            <div className="pt-5 text-slate-800">
                {blog.content}
            </div>
        </div>
        <div className="w-1/3">
            <div className="font-semibold">
                Author
            </div>
            <div className="flex pt-5">
                <div className="flex flex-col justify-center">
                    <Avatar name={blog.author.name || "Anonymous"}/>
                </div>
                <div className="flex flex-col pl-5">
                    <div className="text-2xl font-bold">{blog.author.name || "Anonymous"}</div>
                    <div className="pt-2 font-semibold text-slate-600">Give a short bio of the author here</div>
                </div>
            </div>
        </div>
        </div>
    </div>
}