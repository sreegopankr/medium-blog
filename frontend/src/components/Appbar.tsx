import { Link } from "react-router-dom"
import { Avatar } from "./BlogCard"


export const Appbar = ()=>{
    return <div className="border-b flex justify-between items-center px-10 py-2">
        <Link to={"/blogs"}>
            <div className="font-bold text-lg">
                Medium
            </div>
        </Link>
        
        <div className="flex gap-4">
            <Link to={"/publish"}>
                <button type="button" className="text-white bg-green-700 hover:bg-green-800 focus:outline-none  font-medium rounded-full text-sm px-5 py-2 text-center  ">New</button>
            </Link>
            <div className="flex flex-col justify-center">
                <div className="border-4 rounded-full border-slate-300">
                    <Avatar name="harkirat"/>
                </div>
            </div>  
        </div>
    </div>
}