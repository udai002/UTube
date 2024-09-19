import { Button } from "../components/Button"
import { Navigations } from "../layout/Navigations"
// import ReactPlayer from 'react-player'
import { SimilarVideo } from "../layout/SimilarVideo"
import { AiOutlineLike , AiOutlineDislike } from "react-icons/ai";
import { IoMdMore } from "react-icons/io";

export const Watch = ()=>{
    return <Navigations>
        <div className="grid md:grid-cols-12">
        <div className="md:col-span-8">
            {/* <ReactPlayer url="https://storage.googleapis.com/gtv-videos-bucket/sample/ForBiggerJoyrides.mp4"/> */}
            <div className="bg-secondary-dark text-white w-full md:h-[450px] sm:h-[300px] h-[200px] flex flex-row justify-center items-center">
                This video is privated
            </div>
            <div className="p-2">
             <h1 className="font-bold text-2xl text-roboto mt-2">Build a layout with tailwind css using grid| crash course</h1>
             <div className="flex flex-col md:flex-row md:justify-between md:items-center">
                <div className="flex items-center mt-2">
                    <img src="/profile.jpg" className="h-10 w-10 pt-1" alt="profile image" />
                    <div className="ml-2">
                        <h1 className="text-lg font-semibold">Wed dev simplifed</h1>
                        <p className="text-secondary-text text-sm">12M subscribers</p>
                    </div>
                    <Button className="ml-4 border-2 rounded-full px-6 bg-secondary-hover" variant='ghost'>Subscibe</Button>
                </div>
                <div className="flex mt-4 p-2">
                    <Button className="px-6 mr-3 rounded-full"><AiOutlineLike /></Button>
                    <Button className="px-6 mr-3  rounded-full"><AiOutlineDislike /></Button>
                    <Button className="px-6 mr-3  rounded-full"><IoMdMore /></Button>
                </div>
             </div>
            </div>
            <div className="bg-secondary-hover p-4 mt-1 rounded-xl m-2">
                <p className="font-bold ">120M views 2 years ago</p>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum modi voluptatibus illum iure, assumenda recusandae similique laudantium ab autem dolorem, explicabo quod, cumque adipisci aut eveniet natus? Dolore fuga aspernatur at. Adipisci voluptas sed similique suscipit! Officia eveniet saepe omnis consequuntur ad modi, voluptate ex dicta! Consequatur voluptatibus quisquam possimus.</p>
            </div>
        </div>
        <div className="md:col-span-4 mt-4">
            <SimilarVideo/>
            <SimilarVideo/>
            <SimilarVideo/>
        </div>
        </div>
    </Navigations>
}