import { MdOutlineFileUpload } from "react-icons/md";
import { Button } from "../components/Button";
import {SyntheticEvent,  useState } from "react";
import {useNavigate} from 'react-router-dom'
import Cookies from 'js-cookie'
import { LoaderContainer } from "../components/Loader";

export const Signup = () => {
    const [username, setUsername] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [confirmPass, setConfirmPass] = useState('')
    const [description, setDescription] = useState('')
    const [profile, setProfile] = useState<File | undefined>(undefined)
    const [cover, setCover] = useState<File | undefined>(undefined)

    const [showPass , setShowPass] = useState(false)
    const [showError , setShowError] = useState(false)
    const [errorpass , setErrorpass] = useState(false)
    const [isLoading , setIsLoading] = useState(false)

    const navigation = useNavigate()

    const createFormData = ()=>{
        console.log(profile  , cover)
        const formData = new FormData();
        formData.set("username" , username);
        formData.set("email",email);
        formData.set("password", password)
        formData.set('description', description)
        formData.append('profile', profile?profile:'')
        formData.set('coverPhoto' , cover?cover:"")
        return formData

    }

    const submitDatafromForm = async ()=>{
        const information = createFormData()
        console.log(information)
        try{
            console.log('fetching started..')
            const options = {
                method:"POST",
                body:information
            }
            setIsLoading(true)
            const response = await fetch("https://protube-backend-t25f.onrender.com/api/user" , options)
            console.log(response)
            setIsLoading(false)
            if(response.ok){
                const data = await response.json()
                console.log(data)
                const {jwtToken} = data
                Cookies.set("jwt_token",jwtToken)
                navigation('/')
            }
        }catch(e){
            console.log(e)
        }
    }

    const OnFormSubmission = (e:SyntheticEvent<HTMLFormElement , SubmitEvent>) =>{
        e.preventDefault()
        
        if(!(username !=="" && password !=="" && email!="" && confirmPass!=="" && profile && cover )){
            console.log("all fields are mandatory")
            setShowError(true)
        }else{
            setShowError(false)
            if(password === confirmPass){
                setErrorpass(false)
                console.log("you are password is crct")
                submitDatafromForm()
            }else{
                setErrorpass(true)
            }
        }
    }

    return <div className="flex justify-center bg-gray-100 items-center min-h-screen w-full">
       {isLoading?<LoaderContainer/>:''} 
        <div className="p-20 bg-white">
            <form className="flex flex-col justify-stretch w-full" onSubmit={OnFormSubmission} encType="multipart/form-data">
                <h1 className="text-center font-bold text-2xl mb-6">Create account</h1>
                <div className="flex flex-wrap">
                    <div className="flex flex-col mb-4 mr-4">
                        <label htmlFor="username">Username</label>
                        <input type="text" id="username" className="p-2 bg-gray-100  rounded-md outline-none" placeholder="Enter your username" onChange={e => { setUsername(e.target.value) }} value={username} />
                    </div>
                    <div className="flex flex-col mb-4">
                        <label htmlFor="email">Email</label>
                        <input type="text" id="email" className="p-2 bg-gray-100  rounded-md outline-none" placeholder="Enter your email" onChange={e => { setEmail(e.target.value) }} value={email} />
                    </div>
                </div>

                <div className="flex  my-5">

                    <div className="flex flex-col justify-center w-full">
                        <p>Profile</p>
                        <br />
                        <label htmlFor="profile" className="flex flex-col items-center justify-center w-20 h-20 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50  dark:bg-gray-200 hover:bg-gray-100 dark:border-gray-400 dark:hover:border-gray-500 dark:hover:bg-gray-600">
                            {profile?<><img src={URL.createObjectURL(profile)} alt="profile" className="w-20 h-20" /></>:<div className="flex flex-col items-center justify-center pt-5 pb-6">
                                <MdOutlineFileUpload />
                            </div>}
                            <input id="profile" type="file" className="hidden" onChange={(e) => {
                                if (e.target.files) setProfile(e.target.files[0])
                            }} />
                        </label>

                        
                    </div>

                    <div className="flex flex-col justify-center w-full">
                        <p>Cover</p>
                        <br />
                        <label htmlFor="cover" className="flex flex-col items-center justify-center w-20 h-20 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50  dark:bg-gray-200 hover:bg-gray-100 dark:border-gray-400 dark:hover:border-gray-500 dark:hover:bg-gray-600">
                            {cover?<> <img src={URL.createObjectURL(cover)} alt="cover" className="w-20 h-20" /> </>:<div className="flex flex-col items-center justify-center pt-5 pb-6">
                                <MdOutlineFileUpload />
                            </div>}
                            <input id="cover" type="file" className="hidden" onChange={e=>{
                               if(e.target.files) setCover(e.target.files[0])
                            }} />
                        </label>
                    </div>

                </div>

                <div className="flex flex-col mb-10">
                    <label htmlFor="description">Description</label>
                    <textarea name="descripion" id="decription" cols={19} rows={5} className="bg-gray-100 p-4 mt-2" value={description} placeholder="Everything you need to know..." onChange={e=>{
                        setDescription(e.target.value)
                    }}></textarea>
                </div>

                <div className="flex flex-wrap">
                    <div className="flex flex-col  mb-4 mr-4">
                        <label htmlFor="password">Password</label>
                        <input type={showPass?"text":"password"} id="password" className="p-2 bg-gray-100 rounded-md outline-none" placeholder="Enter your password" onChange={e => { setPassword(e.target.value) }} value={password}  />
                    </div>
                    <div className="flex flex-col  mb-4">
                        <label htmlFor="password">Confirm password</label>
                        <input type={showPass?"text":"password"} id="password" className="p-2 bg-gray-100 rounded-md outline-none" placeholder="Re-enter password" onChange={e => { setConfirmPass(e.target.value) }} value={confirmPass} />
                    </div>
                </div>

                <div className="flex items-center mb-4">
                    <input type="checkbox" className="bg-gray-100 mr-2" onChange={e=>{
                       setShowPass(!showPass)
                    }} />show password
                </div>
                {showError?<p className="mb-4 text-red-500">All fields are mandatory</p>:''}
                {errorpass?<p className="mb-4 text-red-500">Password doesn't match</p>:" "}
                <div className="flex justify-between items-center">
                    <Button type="submit" className="bg-[#ef4444] text-white px-6 py-2 font-semibold">Create Account</Button>
                </div>
            </form>
        </div>
    </div>
}