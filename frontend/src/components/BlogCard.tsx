import { Link } from "react-router-dom";


interface BlogCardProps{
    authorName: string;
    title: string;
    content: string;
    publishedDate: string;
    id: string;
}
export const BlogCard = ({
    authorName,
    title,
    content,
    publishedDate,
    id
}: BlogCardProps)=>{
    
    
    return <Link to={`/blog/${id}`}>
        <div className="border-b border-slate-500 border-solid shadow-lg border-opacity-50 pl-10 py-3 cursor-pointer">
            <div className="flex items-center">
                <Avatar name={authorName}/>
                <div className="pl-2 font-semibold">{authorName}</div>
                < Dot/>
                <div className="pl-2 text-slate-500">{publishedDate}</div>
            </div>
            <div className="font-bold text-xl">
                {title}
            </div>
            <div className="text-sm font-sans font-medium text-stone-600">
                {content.slice(0,100)+ "..."}
            </div>
            <div className="inline-block border px-2 rounded-xl text-sm py-0.5  text-slate-400">
                <ReadTime content={content}/>
            </div>
        </div>
        </Link>
}

export function Avatar({name}: {name: string}){
    return <div className="relative inline-flex items-center justify-center w-6 h-6 overflow-hidden bg-gray-300 rounded-full ">
    <span className="font-medium text-gray-600 ">{name[0]}</span>
    </div>
}

function Dot(){
    return <div className="h-1 w-1 bg-slate-400 rounded-full ml-2">

    </div>
}

function ReadTime({content}: {content:string}){
    return <div>
        {Math.ceil(content.length/100) + " min read "}
    </div>
}