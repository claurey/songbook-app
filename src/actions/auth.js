
import Swal from 'sweetalert2';

import { fetchWithoutToken, fetchWithToken } from "../helpers/fetch";
import { types } from "../types/types";



export const startLogin=(email,password) => {
    
    return async(dispatch) => {
      
            const response = await fetchWithoutToken('auth/','POST',{email,password});
            const data= await response.json();

            if(!data.ok){
                
                return Swal.fire("Error",data.msg || data.errors.password.msg,"error");
                
            }
            //Save in localStorage
            localStorage.setItem('songbook-token', data.token);
            localStorage.setItem('token-init-date',new Date().getTime());
            //Save in the store
            dispatch(login({
                uid:data.uid,
                name:data.name}));
    }

  }

export const login=(user) => {
    return{
        type: types.authLogin,
        payload:user
    }
  }

export const startRegister=(name,email,password) => {

    return async (dispatch)=> {
        //Create new user in DB
        const response=await fetchWithoutToken("auth/new","POST",{name,email,password});
        const data=await response.json();
        
        if(!data.ok){
            return Swal.fire("Error",data.msg || data.errors.password.msg,"error");
        }

        //Save credentials and token in local storage
        localStorage.setItem('songbook-token',data.token);
        localStorage.setItem('token-init-date',new Date().getTime());
        //Call to login
        dispatch(login({
            uid:data.uid,
            name:data.name}));
    }
    
  }

export const startChecking=() => {

    return async(dispatch) => {

      const response=await fetchWithToken('auth/renew',"GET",{});
      const data=await response.json();
      if(!data.token){
          dispatch(checkingFinish());
        return;
      }
      //Save credentials and token in local storage
      localStorage.setItem('songbook-token',data.token);
      localStorage.setItem('token-init-date',new Date().getTime());
      dispatch(login({
        uid:data.uid,
        name:data.name}));
    }
}

const checkingFinish=() => {
    return {
        type:types.authCheckingFinish
    }
  }

export const startLogout=() => {
  return (dispatch) => {
    localStorage.removeItem("token-init-date");
    localStorage.removeItem("songbook-token");
    //Pending clear songs
    dispatch(Logout());
  }
}

const Logout=() => {
  return {
    type:types.authLogout
  }
}  



