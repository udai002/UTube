import {useState} from 'react'

import { MdMenu } from "react-icons/md";
import { Button } from "../components/Button";
import { MdOutlineFileUpload } from "react-icons/md";
import { FiBell } from "react-icons/fi";
import { FaRegUser } from "react-icons/fa6";
import { FaMicrophone , FaArrowLeft  } from "react-icons/fa";
import { IoIosSearch } from "react-icons/io";
import { FaYoutube } from "react-icons/fa";
import { useSidebar } from '../context/SiderbarContext';
import { Link } from 'react-router-dom';
import { Upload } from '../pages/Upload';

export const PageHeader = () => {
 
  const [showFullWidthSearch , setShowFullWidthSearch] = useState(false) ;
  const [showUpload ,setShowUpload] = useState(false)
  return <div className="flex gap-10 lg:gap-20 justify-between p-4">

    <FirstSectionHeader hidden={showFullWidthSearch} />

    <form className={`md:flex flex-grow justify-center gap-4 ${showFullWidthSearch?"flex":"hidden"}`}>
    <Button variant="ghost" size="icon" className="md:hidden" onClick={()=>setShowFullWidthSearch(false)}>
        <FaArrowLeft />
      </Button>
      <div className="flex flex-grow  max-w-[600px]">
        <input type="search" placeholder="Search" className="rounded-l-full py-1 px-4 border border-secondary-border shadow-inner shadow-secondary text-lg w-[100%] focus:border-blue-500 outline-none" />
        <Button className="py-2 px-4 rounded-r-full border border-l-0 border-secondary-border"><IoIosSearch /></Button>
      </div>
      <Button size='icon' type="button" className="flex-shrink-0"><FaMicrophone /></Button>
    </form>

    <div className={`shrink-0 md:gap-3 ${showFullWidthSearch?"hidden":"flex"}`}>
      <Button variant="ghost" size="icon" className="md:hidden" onClick={()=>setShowFullWidthSearch(true)}>
        <IoIosSearch />
      </Button>
      {/* <Button variant="ghost" size="icon" className="md:hidden">
        <FaMicrophone />
      </Button> */}
      <Button variant="ghost" onClick={()=>{setShowUpload(true)}} size="icon">
        <MdOutlineFileUpload />
      </Button>
      <Button variant="ghost" className='hidden md:block' size="icon">
        <FiBell />
      </Button>
      <Button variant='ghost' className='border-2 rounded-full flex  border-blue-400 font-bold text-blue-400 px-4 '>
        <Link to='/signin' className='flex items-center'>
      <FaRegUser className='mr-2 hidden md:block' /> Sigin
        </Link>
      </Button>
      {/* <Button variant="ghost" size="icon">
        <FaRegUser />
      </Button> */}
    </div>
   {showUpload?<>
     <div className='fixed w-full min-h-screen bg-black opacity-75 top-0 left-0 z-[1000]' onClick={()=>{setShowUpload(false)}}>
    </div>
      <Upload setShowUpload={setShowUpload} /> </>:""}
  </div>
}

type FirstSectionHeaderProps = {
  hidden:boolean
}


export function FirstSectionHeader({hidden}:FirstSectionHeaderProps){
  const {toggle} = useSidebar()

  return   <div className={`flex items-center flex-shrink-0 gap-4 ${hidden?"hidden":"flex"}`}>
  <Button variant="ghost" size="icon" onClick={toggle} >
    <MdMenu className="text-xl" />
  </Button>
  <a href="/" className='flex items-center'><FaYoutube className='text-red-500 text-4xl mr-1'/><h1>UTube</h1></a>
</div>
}