import React from 'react'
import { Routes, Route } from 'react-router-dom'

import AllSongsScreen from '../modules/all-songs/screens/AllSongsScreen'
import AuthorScreen from '../modules/author/screens/AuthorScreen'
import FavoriteScreen from '../modules/favorites/screens/FavoriteScreen'
import SearchScreen from '../modules/search/screens/SearchScreen'
import SongScreen from '../modules/song/screens/SongScreen'
import SideBar from '../modules/ui/Sidebar'
import Navbar from '../modules/ui/Navbar'
import AddNewFab from '../modules/ui/AddNewFab'

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
            <Routes>
              <Route path="all" element={<AllSongsScreen/>}/>
              <Route path="favorites" element={<FavoriteScreen/>}/>
              <Route path="search" element={<SearchScreen/>}/>
              <Route path="song/:songId" element={<SongScreen/>}/>
              <Route path="author/:authorId" element={<AuthorScreen/>}/>
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