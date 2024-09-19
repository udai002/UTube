import { videos } from "../data/Home";
import { VideoGridItem } from "./VideoGridItem";

export const ChannelVideos = ()=><div>
      <div className='grid gap-6 grid-cols-[repeat(auto-fill,minmax(250px,1fr))] justify-center content-center w-full mt-4'>

    {videos.map(item=><VideoGridItem key={item.id} {...item}/>)}
    
      </div>
</div>

