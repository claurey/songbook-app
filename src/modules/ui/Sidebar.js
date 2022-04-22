import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';

import SvgIcon from '@mui/material/SvgIcon';
import LibraryMusicIcon from '@mui/icons-material/LibraryMusic';
import LyricsIcon from '@mui/icons-material/Lyrics';
import FavoriteIcon from '@mui/icons-material/Favorite';
import Badge from '@mui/material/Badge';
import Chip from '@mui/material/Chip';
import Stack from '@mui/material/Stack';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ExpandLessIcon from '@mui/icons-material/ExpandLess';
import MenuIcon from '@mui/icons-material/Menu';


const SideBar = () => {

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
                <p>Claudia</p>
                <hr />
            </div>
            <div className="sidebar__menu-container">
            
                <div className="sidebar__menu-item">
                    <NavLink to="/all" className={
                        ({isActive}) => {
                            return (isActive ? 'sidebar__menu-link sidebar__menu-active': 'sidebar__menu-link ')
                        }
                        } >
                        <Badge badgeContent={4} color="success"><SvgIcon component={LibraryMusicIcon} /></Badge>
                        <span className='px-2 sidebar__menu-text '>All Songs</span> 
                    </NavLink>
                </div>
            
                <div className="sidebar__menu-item">
                    <NavLink to="/favorites"  className={
                        ({isActive}) => {
                            return (isActive ? 'sidebar__menu-link sidebar__menu-active': 'sidebar__menu-link ')
                        }
                        }>
                        <SvgIcon component={FavoriteIcon} />
                        <span className='px-2 sidebar__menu-text'>Favorites</span> 
                    </NavLink>
                </div>

                <div className={`sidebar__menu-item sidebar__menu-button-open ${openList&&"sidebar__subitem-open"}`} onClick={handleClick}>
                       <div className='sidebar__menu-link'>
                        <SvgIcon component={LyricsIcon} />
                        <span className='px-2 sidebar__menu-text'>Your Singers</span> 
                        {openList?<SvgIcon component={ExpandMoreIcon}  />:<SvgIcon component={ExpandLessIcon} />} 
                       </div>
                       <div className={`sidebar__subitem ${openList&&"sidebar__subitem-open"}`}>
                            <Stack direction="row" spacing={1} className="p-2" >
                                <Chip label="Shakira" className='px-2' onClick={handleClick} />
                            </Stack>
                            <Stack direction="row" spacing={1} className="p-2">
                                <Chip label="Avril Lavigne" onClick={handleClick} />
                            </Stack>
                            <Stack direction="row" spacing={1} className="p-2">
                                <Chip label="Libido" onClick={handleClick} />
                            </Stack>
                            <Stack direction="row" spacing={1} className="p-2">
                                <Chip label="Aerosmith" onClick={handleClick} />
                            </Stack>
                            <Stack direction="row" spacing={1} className="p-2">
                                <Chip label="Savage Garden" onClick={handleClick} />
                            </Stack>
                            <Stack direction="row" spacing={1} className="p-2">
                                <Chip label="Savage Garden" onClick={handleClick} />
                            </Stack>
                            <Stack direction="row" spacing={1} className="p-2">
                                <Chip label="Savage Garden" onClick={handleClick} />
                            </Stack>
                            <Stack direction="row" spacing={1} className="p-2">
                                <Chip label="Savage Garden" onClick={handleClick} />
                            </Stack>
                            <Stack direction="row" spacing={1} className="p-2">
                                <Chip label="Savage Garden" onClick={handleClick} />
                            </Stack>
                            <Stack direction="row" spacing={1} className="p-2">
                                <Chip label="Savage Garden" onClick={handleClick} />
                            </Stack>
                            <Stack direction="row" spacing={1} className="p-2">
                                <Chip label="Savage Garden" onClick={handleClick} />
                            </Stack>
                    
                </div>

                </div>
     
            </div>

        </nav>
    </aside>
  )
}

export default SideBar