import { useState } from "react"
import { Button } from "./Button"

const categories = [
    "Home",
    "Videos",
    "Shorts",
    "Community"
]

export const ChannelCategories = ()=>{
    const [activeCat , setActiveCat] = useState(categories[0])
    return <div>
        <div className="border-b-2 border-secondary-dark w-full  ">
            <ul className="list-none flex flex-row items-center">
                {categories.map(item=><li className={`font-semibold ${activeCat===item?"border-b-2 border-secondary-dark-hover font-bold":''}`}><Button variant="ghost" className="p-4" onClick={()=>{setActiveCat(item)}}>{item}</Button></li>)}
            </ul>
        </div>
    </div>
}
