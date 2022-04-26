import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';

import SvgIcon from '@mui/material/SvgIcon';
import LibraryMusicIcon from '@mui/icons-material/LibraryMusic';
import LyricsIcon from '@mui/icons-material/Lyrics';
import FavoriteIcon from '@mui/icons-material/Favorite';
import Badge from '@mui/material/Badge';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ExpandLessIcon from '@mui/icons-material/ExpandLess';
import MenuIcon from '@mui/icons-material/Menu';

import SingerButtonSidebar from './SingerButtonSidebar';


const SideBar = () => {
    

        const {name}=useSelector((state) => {
          return state.auth;
        });
        const {songsList}=useSelector((state) => {
            return state.songs;
          })
        //Sidebar menu-item open and appear options
        const [openList, setOpenList]=useState(false);

        const handleClick=() => {
          setOpenList(!openList);
        }

        //Sidebar nav open and close click hamburger icon
        const [openNav, setOpenNav]=useState(false);
        const handleClickNav=() => {
          setOpenNav(!openNav);
        }

  return (
    <aside>
        <div className="sidebar__menu-top"  onClick={handleClickNav}>
          <SvgIcon component={MenuIcon} />
        </div>   
           
        <nav  className={`sidebar__container  p-3 text-center pt-4 ${openNav&&"sidebar__container-open"}`}>
            <div className="sidebar__menu-close"  onClick={handleClickNav}>
            x 
            </div>  
            <h1>Song Book</h1>
            <div className="sidebar___user">
                <img className="sidebar__user-image" src="../assets/undraw_reading_re_29f8.svg" alt="" />
                <h4>{name}</h4>
                <hr />
            </div>
            <div className="sidebar__menu-container">
            
                <div className="sidebar__menu-item">
                    <NavLink to="/all" className={
                        ({isActive}) => {
                            return (isActive ? 'sidebar__menu-link sidebar__menu-active': 'sidebar__menu-link ')
                        }
                        } >
                        <Badge badgeContent={songsList.length} color="success"><SvgIcon component={LibraryMusicIcon} /></Badge>
                        <span className='px-3 sidebar__menu-text '>Songs</span> 
                    </NavLink>
                </div>
            
                <div className="sidebar__menu-item">
                    <NavLink to="/favorites"  className={
                        ({isActive}) => {
                            return (isActive ? 'sidebar__menu-link sidebar__menu-active': 'sidebar__menu-link ')
                        }
                        }>
                        <SvgIcon component={FavoriteIcon} />
                        <span className='px-3 sidebar__menu-text'>Favorites</span> 
                    </NavLink>
                </div>

                <div className={`sidebar__menu-item sidebar__menu-button-open ${openList&&"sidebar__subitem-open"}`} >
                       <div className='sidebar__menu-link' onClick={handleClick}>
                        <SvgIcon component={LyricsIcon} />
                        <span className='px-3 sidebar__menu-text'>Singers</span> 
                        {openList?<SvgIcon component={ExpandMoreIcon}  />:<SvgIcon component={ExpandLessIcon} />} 
                       </div>
                       <div className={`sidebar__subitem ${openList&&"sidebar__subitem-open"}`}>
                            <SingerButtonSidebar/>
                     </div>

                </div>
     
            </div>

        </nav>
    </aside>
  )
}

export default SideBar