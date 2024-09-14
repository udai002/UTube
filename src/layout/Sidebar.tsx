import { Children, ElementType, ReactNode, useState } from "react"
import { CiHome } from "react-icons/ci";
import { SiYoutubeshorts } from "react-icons/si";
import { MdOutlineSubscriptions } from "react-icons/md";
import { LuLibrary } from "react-icons/lu";
import { twMerge } from "tailwind-merge";
import { Button, buttonStyles } from "../components/Button";
import { MdKeyboardArrowUp , MdKeyboardArrowDown  } from "react-icons/md";
import { MdOutlineHistory } from "react-icons/md";
import { PiVideoLight } from "react-icons/pi";
import { FiClock } from "react-icons/fi";
import { useSidebar } from "../context/SiderbarContext";
import { FirstSectionHeader } from "./PageHeader";

export const Sidebar = () => {
    const {isLargeOpen , isSmallOpen , close} = useSidebar()

    console.log(isLargeOpen , isSmallOpen)

    return <div>
        <aside className={`sticky top-0 overflow-y-auto overflow-hidden scrollbar-hidden hidden  pb-4  flex-col ml-1 ${isLargeOpen?"lg:hidden":"lg:flex"}`}>
            <ul className="list-none w-full flex flex-col justify-center items-center ">
                <li><SmallSiderbarItem Icon={CiHome} title="Home" url="youtube.com" /></li>
                <li><SmallSiderbarItem Icon={SiYoutubeshorts} title="Shorts" url="youtube.com" /></li>
                <li><SmallSiderbarItem Icon={MdOutlineSubscriptions} title="Subscription" url="youtube.com" /></li>
                <li><SmallSiderbarItem Icon={LuLibrary} title="Library" url="youtube.com" /></li>
            </ul>
        </aside>
        {isSmallOpen && <div className="lg:hidden fixed inset-0 z-[999] bg-secondary-dark opacity-50" onClick={close}> 
            
            </div>}
        <aside className={`w-56  lg:sticky absolute top-0 overflow-y-auto scrollbar-hidden pb-4  flex-col gap-2 px-2 ${
          isLargeOpen ? "lg:flex" : "lg:hidden"
        } ${isSmallOpen ? "flex z-[999] bg-white h-[100vh]" : "hidden"}`}>
            <div className="pl-3 pr-3 pt-2">
            {isSmallOpen &&<FirstSectionHeader hidden={false}  />}
            </div>
            <LargerSidebarSection visibleItemCount={4}>
                <LargerSidebarItem Icon={CiHome} title="Home"  url="ajhfkljahf" isActive/>
                <LargerSidebarItem Icon={MdOutlineSubscriptions} title="Subscription"  url="/subscription" />
            </LargerSidebarSection>
            <hr />
            <LargerSidebarSection visibleItemCount={4}>
                <LargerSidebarItem Icon={LuLibrary} title="Library"  url="/Library"/>
                <LargerSidebarItem Icon={MdOutlineHistory} title="History"  url="/history" />
                <LargerSidebarItem Icon={PiVideoLight} title="Your Saved"  url="/history" />
                <LargerSidebarItem Icon={FiClock} title="Watch Later"  url="/history" />
            </LargerSidebarSection>
           
        </aside>
    </div>
}

type SmallSiderbarItemProps = {
    Icon: ElementType,
    title: string,
    url: string
}

function SmallSiderbarItem({ Icon, title, url }: SmallSiderbarItemProps) {
    return <a href={url} className={`flex flex-col justify-center items-center p-4 w-20 hover:bg-secondary-hover`} >
        <Icon className="w-5 h-5" />
        <div className="text-sm">{title}</div>
    </a>
}

type LargerSidebarSectionProps= {
    children:ReactNode ,
    title?:string ,
    visibleItemCount?:number
}

function LargerSidebarSection({children , title , visibleItemCount=Number.POSITIVE_INFINITY}:LargerSidebarSectionProps){
    const [isExpand , setIsExpand] = useState(false)
    const childrenArray = Children.toArray(children).flat()
    const showExpandButton = childrenArray.length > visibleItemCount
    const visibleChildren = isExpand?childrenArray:childrenArray.slice(0 , visibleItemCount)
    const ButtonIcon = isExpand?MdKeyboardArrowUp:MdKeyboardArrowDown 
    return <div className="">
        {title && <div className="ml-4 mt-2 text-lg mb-1">{title}</div>}
        {visibleChildren}
        {showExpandButton && <Button variant="ghost" className="w-full flex items-center gap-4 rounded-lg p-3 px-4 " onClick={()=>setIsExpand(!isExpand)} >
            <ButtonIcon/> <div>{isExpand?"Show less":"Show more"}</div>
            </Button>}
    </div>
}

type LargerSidebarItemProps = {
    Icon:ElementType | string,
    title:string ,
    url:string,
    isActive?:boolean
}

function LargerSidebarItem({Icon , title , url , isActive=false}:LargerSidebarItemProps){
    return <a href={url} className={twMerge(buttonStyles({variant:"ghost" }) , `w-full flex items-center gap-4 rounded-lg p-3 px-4 ${isActive?"font-bold bg-secondary-hover":""}`)}>
        {typeof Icon === 'string'?<img src={Icon} className="h-6 w-6 rounded-full"/>: <Icon className='w-6 h-6' />}
        
        <div className="whitespace-nowrap overflow-hidden text-ellipsis">{title}</div>
    </a>
}