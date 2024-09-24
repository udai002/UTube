import {useNavigate} from 'react-router-dom'
import { Link } from "react-router-dom";
import { Button } from "../components/Button";
import { SyntheticEvent, useState } from "react";
import Cookies from "js-cookie";

export  const Signin = ()=>{ 
    
    const [username , setUsername] = useState('')
    const [password , setpassword] = useState('')
    const [showPass , setShowPass] = useState(false)
    const [showError , setShowError] = useState(false)
    const [userError , setUserError] = useState(false)

    const navigation = useNavigate()

    const submitForm = (e:SyntheticEvent<HTMLFormElement , SubmitEvent>)=>{
        e.preventDefault();
        if(!(username!=="" && password!=="")){
            setShowError(true)
            console.log("all fields are mandatory")
        }else{
            setShowError(false)
            sendingData()
        }

    }

    const createFormData = ()=>{
        const formData = new FormData();
        formData.set("email" , username)
        formData.set("password", password)
        return formData
    }

    const sendingData = async()=>{
        const information = createFormData()
         try{
            const options = {
                method:"POST",
                body:information
            }
            const response = await fetch("https://protube-backend-t25f.onrender.com/api/user/login" , options)
            if(response.ok){
                setUserError(false)
                const data = await response.json();
                const {jwtToken} = data;
                Cookies.set("jwt_token" , jwtToken);
                navigation('/')
            }else{
                console.log("user not exists")
                setUserError(true)
            }
         }catch(e){
            console.log(e)
         }
    }

    return <div className="flex justify-center bg-gray-100 items-center h-screen w-full">
    <div className="p-20 bg-white w-[400px]">
        <form className="flex flex-col justify-stretch w-full" onSubmit={submitForm}>
            <h1 className="text-center font-bold text-2xl mb-6">Sigin in</h1>
            <div className="flex flex-col mb-4">
            <label htmlFor="email">Email</label>
            <input type="email" id="email" className="p-2 bg-gray-100  rounded-md outline-none" placeholder="Enter your email" value={username} onChange={e=>{setUsername(e.target.value)}}/>
            </div>
            <div className="flex flex-col  mb-4">
            <label htmlFor="password">Password</label>
            <input type={showPass?"text":"password"} id="password" className="p-2 bg-gray-100 rounded-md outline-none" placeholder="Enter your password" value={password} onChange={e=>{setpassword(e.target.value)}}/>
            </div>
            <div className="flex items-center mb-4">
            <input type="checkbox" className="bg-gray-100 mr-2" onChange={()=>{
                setShowPass(!showPass)
            }} />show password
            </div>
            {showError?<p className="text-red-500 mb-4">All Fields are mandatory</p>:""}
            {userError?<p className="text-red-500 mb-4">User not exists</p>:""}
            <div className="flex justify-between items-center">
                <Button type="submit" className="bg-[#ef4444] text-white px-6 py-2 font-semibold">Sigin</Button>
                <Button type="button" variant='ghost' className="text-[#ef4444] underline px-4 py-2 font-semibold text-xs md:text-lg"><Link to='/createAccount'>Create account</Link></Button>
            </div>
        </form>
    </div>
</div>}