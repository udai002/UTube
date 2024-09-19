import { BrowserRouter, Routes, Route } from 'react-router-dom'

import './App.css'

import { SidebarContextProvider } from './context/SiderbarContext'
import { Home } from './pages/Home'
import { Channel } from './pages/Channel'
import { Watch } from './pages/Watch'
import { Signin } from './pages/Sigin'


function App() {


  return (
    <SidebarContextProvider>
      <BrowserRouter>
        <Routes>
          <Route path='/' Component={Home} />
          <Route path='/Channel/:id' Component={Channel} />
          <Route path='/watch' Component={Watch}/>
          <Route path='/signin' Component={Signin} />
        </Routes>
      </BrowserRouter>
    </SidebarContextProvider>
  )
}

export default App
