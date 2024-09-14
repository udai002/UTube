import {useState} from 'react'
import './App.css'
import { PageHeader } from './layout/PageHeader'
import {CategoryPills} from './components/CategoryPills'
import { categories, videos } from './data/Home'
import { VideoGridItem } from './components/VideoGridItem'
import { Sidebar } from './layout/Sidebar'
import { SidebarContextProvider } from './context/SiderbarContext'

function App() {

  const [selectCategory , setSelectCategory] = useState(categories[0])
  
  return (
    <SidebarContextProvider>
    <div className='flex flex-col max-h-screen'>
      <PageHeader/>
      <div className='grid grid-cols-[auto,1fr] flex-grow-1 overflow-auto scrollbar-hidden'>
        <div className=''>
          <Sidebar  />
        </div>
        <div className="overflow-x-hidden md:px-8 pb-4">
        <div className='sticky top-0 bg-white z-10 pb-4'> 
          <CategoryPills categories={categories} selectCategory={selectCategory} onSelect={setSelectCategory} />
        </div>
        <div className='grid gap-6 grid-cols-[repeat(auto-fill,minmax(350px,1fr))] justify-center content-center w-full'>
          {videos.map(item=><VideoGridItem key={item.id} {...item}/>)}
        </div>
        </div>
      </div>
    </div>
    </SidebarContextProvider>
  )
}

export default App
