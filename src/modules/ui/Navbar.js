import React from 'react';

import SvgIcon from '@mui/material/SvgIcon';
import ExitToAppRoundedIcon from '@mui/icons-material/ExitToAppRounded';
import AddCircleRoundedIcon from '@mui/icons-material/AddCircleRounded';
import { useDispatch } from 'react-redux';
import { startLogout } from '../../actions/auth';
import { clearSongs } from '../../actions/songs';
import InputSearch from './InputSearch';
import { openModal } from '../../actions/ui';

const Navbar = () => {


  const dispatch= useDispatch();

  const handleLogout=() => {
    dispatch(startLogout());
    dispatch(clearSongs());
  }
  const handleClickAddSong=() => {
    dispatch(openModal());

  }

  return (
    <nav >
                
            <div className='navbar__container'>
              <InputSearch/>
              <div className='navbar__buttons'>
                <button className="nav-item-new navbar__buttons-item" onClick={handleClickAddSong}>
                 <SvgIcon component={AddCircleRoundedIcon}/> New Song
                </button>
                <button onClick={handleLogout} className="navbar__buttons-item  nav-item-logout">
                  <span>Logout</span>  <SvgIcon component={ExitToAppRoundedIcon}/>
                </button>
              
              </div>
              
            </div>
          
</nav>
  )
}

export default Navbar