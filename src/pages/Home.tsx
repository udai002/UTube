import {videos } from '../data/Home'
import { VideoGridItem } from '../components/VideoGridItem'

import { Navigations } from '../layout/Navigations'


export const Home = ()=>{
    return <Navigations>
        
        <div className='grid gap-6 grid-cols-[repeat(auto-fill,minmax(350px,1fr))] justify-center content-center w-full'>
        {videos.map(item=><VideoGridItem key={item.id} {...item}/>)}
        {/* {videos.map(item=><VideoGridItem key={item.id} {...item}/>)} */}
      </div>
        
         
    </Navigations>
}