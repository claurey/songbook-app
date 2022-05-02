import React from 'react';
import { Navigate } from 'react-router-dom';

const PrivateRouter = ({children, userLogged}) => {
   

  // const location=useLocation();

  // localStorage.setItem('lastPath',location.pathname + location.search);

  return (

    userLogged?children:<Navigate to="/auth/login"/>
  )
}
    
export default PrivateRouter