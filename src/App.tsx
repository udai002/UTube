import { BrowserRouter, Routes, Route } from 'react-router-dom'

import './App.css'

import { SidebarContextProvider } from './context/SiderbarContext'
import { Home } from './pages/Home'
import { Channel } from './pages/Channel'


function App() {


  return (
    <SidebarContextProvider>
      <BrowserRouter>
        <Routes>
          <Route path='/' Component={Home} />
          <Route path='/Channel/:id' Component={Channel} />
        </Routes>
      </BrowserRouter>
    </SidebarContextProvider>
  )
}

export default App
