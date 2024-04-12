import { SignupInput } from "@sreegopan/medium-common"
import axios from "axios"
import { useState } from "react"
import { Link, useNavigate } from "react-router-dom"
import { BACKEND_URL } from "../config"


export const Auth = ({type}: {type: "signup" | "signin"})=>{
    const navigate = useNavigate()
    const [inputs, setInputs] = useState<SignupInput>({
        name: "",
        email: "",
        password: ""
    })
    async function sendRequest(){
        try{
            const res = await axios.post(`${BACKEND_URL}/api/v1/user/${type}`,inputs)
            const token = res.data.jwt
            localStorage.setItem("token",token)
            navigate("/blogs")
        }catch(e){
            //send alert
        }
    }

    return <div className="flex flex-col items-center">
        <div className=" text-3xl font-bold mt-28">{type==="signin"?"Log into Medium":"Create an account"}</div>
        <div className="font-semibold text-slate-500 mt-2">{type==="signin"?"Don't have an account?":"Already have an account?"} <Link className="underline" to={type==="signin"? "/signup": "/signin"}>{type==="signin"?"Signup":"Login"}</Link></div>
        {type==="signup"? 
        <div className=" mt-7 w-1/2">
            <label className="font-semibold  " htmlFor="username">Username</label>
            <div className="mt-2  font-semibold text-sm ">
                <input className=" border rounded-md p-3 w-full" id="username" type="text" placeholder="Enter your username"
                onChange={(e)=>{
                    setInputs({
                        ...inputs,
                        name: e.target.value
                    })
                }}/>
            </div>
        </div>:null}
        <div className=" mt-5 w-1/2">
            <label className="font-semibold  " htmlFor="email">Email</label>
            <div className="mt-2 font-semibold text-sm">
                <input className="border rounded-md p-3 w-full" id="email" type="text" placeholder="m@example.com"
                onChange={(e)=>{
                    setInputs({
                        ...inputs,
                        email: e.target.value
                    })
                }}/>
            </div>
        </div>
        <div className=" mt-5 w-1/2">
            <label className="font-semibold  " htmlFor="pass">Password</label>
            <div className="mt-2 font-semibold">
                <input className="border rounded-md p-2 w-full" id="pass" type="password"
                onChange={(e)=>{
                    setInputs({
                        ...inputs,
                        password: e.target.value
                    })
                }}/>
            </div>
        </div>
        <button onClick={sendRequest} type="button" className="text-white bg-black hover:bg-slate-800 focus:ring-4 focus:ring-slate-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 mt-5 focus:outline-none w-1/2">{type==="signin"?"Sign In":"Sign Up"}</button>

    </div>
}