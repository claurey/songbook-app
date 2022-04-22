import React from 'react'

import { Route, Routes } from 'react-router-dom';

import LoginScreen from '../modules/auth/screens/LoginScreen';
import RegisterScreen from '../modules/auth/screens/RegisterScreen';

const AuthRouter = () => {

  
  return (
    <Routes>
        <Route path="login" element={<LoginScreen/>} />
        <Route path="register" element={<RegisterScreen/>}/>
        <Route path="/" element={<LoginScreen/>}/>
    </Routes>
  )
}

export default AuthRouter