import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import { startChecking } from '../actions/auth';
import AuthRouter from './AuthRouter';
import DashboardRouter from './DashboardRouter';
import PrivateRouter from './PrivateRouter';
import PublicRouter from './PublicRouter';
import Stack from '@mui/material/Stack';
import CircularProgress from '@mui/material/CircularProgress';

const AppRouter = () => {

  const dispatch=useDispatch();
  const {checking,userLogged}=useSelector((state) => {
    return state.auth;
  });
  

  useEffect(() => {
    dispatch(startChecking());
  }, [dispatch,userLogged]);
 
  
  if(checking){
    return <Stack className="d-flex justify-content-center align-items-center p-5 m-5" sx={{ color: 'grey.500' }} spacing={2} direction="row">
      <CircularProgress color="secondary" />
      
    </Stack>
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