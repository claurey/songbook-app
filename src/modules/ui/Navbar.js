import React from 'react';

import SvgIcon from '@mui/material/SvgIcon';
import SearchIcon from '@mui/icons-material/Search';
import ExitToAppRoundedIcon from '@mui/icons-material/ExitToAppRounded';
import AddCircleRoundedIcon from '@mui/icons-material/AddCircleRounded';
import { useDispatch } from 'react-redux';
import { startLogout } from '../../actions/auth';
import { clearSongs } from '../../actions/songs';

const Navbar = () => {


  const dispatch= useDispatch();
  const handleLogout=() => {
    dispatch(startLogout());
    dispatch(clearSongs());
  }

  return (
    <nav >
                
            <div className='navbar__container'>
              <form className="d-flex navbar__container-form">
                      <input  type="text" placeholder="Search"/>
                      <button className="navbar__search-button" type="submit">
                        <SvgIcon component={SearchIcon}/>
                      </button>
              </form>
              <div className='navbar__buttons'>
                <button className="nav-item-new navbar__buttons-item">
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