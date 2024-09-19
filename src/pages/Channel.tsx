import { MdVerified } from "react-icons/md";
import { Navigations } from "../layout/Navigations"
import { Button } from "../components/Button";
import { ChannelCategories } from "../components/ChannelCategories";
import { ChannelVideos } from "../components/ChannelVideos";


export const Channel = ()=>{
    return <Navigations>
        <div>
            <img src={'/cover.jpg'} alt='cover photo' className="rounded-md w-full h-20 md:h-40" />
        </div>
        <div className="flex items-center mb-4">
            <img src={"/profile.jpg"} alt="profile image" className="rounded-full md:w-40 md:h-40 w-32 h-32"/>
            <div className="flex flex-col items-start ml-2">
                <h1 className="md:text-3xl text-xl font-bold flex items-center mt-2 text-secondary-dark">Web dev simplified <MdVerified className="text-xl ml-2 text-blue-400 "/></h1>
                <p className="text-secondary-dark mt-1">@webDevSimplified</p>
                <small className="text-secondary-text mb-2 mt-1">1.61M subscribers . 754 videos</small>
            <Button className="bg-secondary px-6 rounded-full">Subscribe</Button>
            </div>
           
        </div>
        <div className="p-4">
                <p>web dev simplified is all about teaching well development skills and technices ... more</p>
            </div>
            <div>
                <ChannelCategories />
                <ChannelVideos />
            </div>
    </Navigations>
}