import { Appbar } from "../components/Appbar"
import { BlogCard } from "../components/BlogCard"
import { BlogSkeleton } from "../components/BlogSkeleton"
import { useBlogs } from "../hooks"

export const Blogs = ()=>{
    const {loading, blogs} = useBlogs()
    if(loading){
        return <div>
            <Appbar/>
            <BlogSkeleton/>
            <BlogSkeleton/>
            <BlogSkeleton/>
            <BlogSkeleton/>
        </div>
    }
    return <div>
        <Appbar/>
        <div className="flex justify-center mt-2">
        <div>
            {blogs.map(blog=> <BlogCard 
            authorName={blog.author.name || "Anonymous"}
            title={blog.title}
            content={blog.content}
            publishedDate="10th April 2024"
            id={blog.id}
        />)}
        </div>
    </div>
    </div>
}