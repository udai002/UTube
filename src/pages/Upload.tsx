import { Dispatch, SetStateAction } from "react"
import { Button } from "../components/Button"

type UploadProps = {
    setShowUpload : Dispatch<SetStateAction<boolean>>
}
export const Upload = ({setShowUpload}:UploadProps)=>{
    return <div className="flex fixed z-[1000] w-full  top-0 justify-center">
        <div className="md:w-2/3 fixed pb-2 bg-white z-[1000]">
        <div className="">
            <form className="flex justify-center items-center flex-col w-full">
                <div className="w-2/3 my-4">
                    <input type="text" placeholder="Title" className="p-2 w-full border-[1px] outline-none border-secondary-dark rounded-lg" />
                </div>
                <div className="w-2/3 my-4">
                    <textarea placeholder="Description" className="p-2 w-full  border-[1px] outline-none border-secondary-dark rounded-lg"/>
                </div>
                <div className="w-2/3 mt-2">
                <label htmlFor="thumbnail" className="font-semibold">Thumbnail</label>
                    <input type="file" placeholder="thumbnail Image" className="p-2 w-full  outline-none border-secondary-dark rounded-lg h-16" />
                </div>
                <div className="w-2/3 mt-4">
                <label htmlFor="Video" className="font-semibold">Video</label>
                    <input type="file" placeholder="Video" className="p-2 w-full  outline-none border-secondary-dark rounded-lg" />
                </div>
                <div className="flex justify-around mt-4 mb-8 w-full">
        <Button className="border-2 border-secondary-border rounded-md px-6" onClick={()=>{setShowUpload(false)}}>Cancel</Button>
        <Button className="border-2 border-secondary-border bg-red-600 rounded-md text-white px-6">Post</Button>
    </div>
                
            </form>
        </div>
        </div>
    </div>
}