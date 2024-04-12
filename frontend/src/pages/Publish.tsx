import axios from "axios"
import { Appbar } from "../components/Appbar"
import { BACKEND_URL } from "../config"
import { useState } from "react"
import { useNavigate } from "react-router-dom"


export const Publish = () =>{
    const [title,setTitle] = useState("");
    const [content,setContent] = useState("");
    const navigate = useNavigate();

    return <div className="flex flex-col">
        <Appbar/>
        <div className="flex justify-center mt-10">
        <input onChange={(e)=>{
            setTitle(e.target.value)
        }} type="text" className="w-1/2 h-12 border rounded-lg px-4 py-2" placeholder="Title"/>
        </div>
        <div className="flex justify-center mt-10">
            <textarea onChange={(e)=>{
                setContent(e.target.value)
            }} cols={102} rows={12} className=" border rounded-lg" placeholder="Add Your Blog Here"></textarea>
        </div>
        <div className="flex justify-center mt-6 ">
        <button onClick={async ()=>{
            const response = await axios.post(`${BACKEND_URL}/api/v1/blog`,{
                title,
                content
            },{
                headers:{
                    Authorization: localStorage.getItem("token")
                }
            })
            navigate(`/blog/${response.data.id}`)
        }} type="button" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 ">Publish Post</button>
        </div>
    </div>
}