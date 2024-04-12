import { useParams } from "react-router-dom"
import { useBlog } from "../hooks"
import { FullBlog } from "../components/FullBlog";
import { Appbar } from "../components/Appbar";
import { Spinner } from "../components/Spinner";


export const Blog =()=>{
    const { id } = useParams();
    const {loading, blog} = useBlog({
        id: id || ""
    })
    if(loading || !blog){
        return <div>
            <Appbar/>
            <div className="flex justify-center items-center h-screen">
                <Spinner/>
            </div>
        </div>
    }
    return <div>
        <FullBlog blog={blog}/>
    </div>
}