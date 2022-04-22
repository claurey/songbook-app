import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import { startChecking } from '../actions/auth';
import AuthRouter from './AuthRouter';
import DashboardRouter from './DashboardRouter';
import PrivateRouter from './PrivateRouter';
import PublicRouter from './PublicRouter';

const AppRouter = () => {

  const dispatch=useDispatch();
  const {checking,userLogged}=useSelector((state) => {
    return state.auth;
  });
 

  useEffect(() => {
    dispatch(startChecking());
  }, [dispatch]);
 
  
  if(checking){
    return <h5>Waiting...</h5>;
  }


  return (
      <BrowserRouter>
        <Routes>
            <Route path="/auth/*" element={<PublicRouter userLogged={userLogged}><AuthRouter/></PublicRouter>}/>
            <Route path="/*" element={<PrivateRouter userLogged={userLogged}><DashboardRouter/></PrivateRouter>}/>
        </Routes>

      </BrowserRouter>
  )
}

export default AppRouter