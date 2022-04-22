import React from 'react';
import { Navigate } from 'react-router-dom';

const PublicRouter = ({children, userLogged}) => {

  const lastPath = localStorage.getItem('lastPath') || '/';

  return (
    
    userLogged?<Navigate to={lastPath}/>:children

  )
}

export default PublicRouter