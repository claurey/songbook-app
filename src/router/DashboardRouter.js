import React from 'react'
import { Routes, Route } from 'react-router-dom'

import AllSongsScreen from '../modules/all-songs/screens/AllSongsScreen'
import FavoriteScreen from '../modules/favorites/screens/FavoriteScreen'
import SearchScreen from '../modules/search/screens/SearchScreen'
import SongScreen from '../modules/song/screens/SongScreen'
import SideBar from '../modules/ui/Sidebar'
import Navbar from '../modules/ui/Navbar'
import AddNewFab from '../modules/ui/AddNewFab'
import SingerScreen from '../modules/singer/screens/SingerScreen'
import ModalSong from '../modules/ui/modal/ModalSong'

const DashboardRouter = () => {
  return (

    <>

      <main>
      <div className="songbook__main">
            
          <div className="songbook__sidebar">
            <SideBar/>
          </div>
      
          
          <div className="songbook__container">
            <Navbar/>
            <ModalSong/>
            <Routes>
              <Route path="all" element={<AllSongsScreen/>}/>
              <Route path="favorites" element={<FavoriteScreen/>}/>
              <Route path="search" element={<SearchScreen/>}/>
              <Route path="song/:songId" element={<SongScreen/>}/>
              <Route path="singer/:singerId" element={<SingerScreen/>}/>
              <Route path="/" element={<AllSongsScreen/>}/>
            </Routes>
          </div>
        
        <AddNewFab/>
      </div>
      
      
    </main>
    </>
      

    
  )
}

export default DashboardRouter