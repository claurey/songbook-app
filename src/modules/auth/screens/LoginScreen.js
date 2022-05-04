
import React  from 'react';
import {useDispatch} from 'react-redux';
import {  Link  } from 'react-router-dom';

import {startLogin} from '../../../actions/auth'
import useForm from "../../../hooks/useForm";

const LoginScreen = () => {

  const dispatch=useDispatch();

  const [formValues, handleFormChange]=useForm({email:'',password:''});
 

  const handleSubmit=(e) => {
    e.preventDefault();
    dispatch(startLogin(formValues.email,formValues.password) );
 
  }


  return (
    <div className='login__container text-center'>
        <main className="form-signin">
              <form onSubmit={handleSubmit}>
                <img  src="../../../../assets/undraw_compose_music_ovo2.svg" alt="" width="200" height="200"/>
                <h1 className=" h3 mb-3 fw-normal">Song Book</h1>

                <div className="form-floating">
                  <input type="email" className="form-control" autoComplete='off' id="floatingInput" placeholder="name@example.com" name="email" value={formValues.email} onChange={handleFormChange}/>
                  <label htmlFor="floatingInput">Email:</label>
                </div>
                <div className="form-floating">
                  <input type="password" className="form-control" autoComplete='off' id="floatingPassword" placeholder="Password" name="password" value={formValues.password} onChange={handleFormChange}/>
                  <label htmlFor="floatingPassword">Password:</label>
                </div>

                <button className="w-100 btn btn-lg btn-primary form__button" type="submit">Login</button>

                <div className="mt-3 form-floating">
                  <small>Don't have an account?<Link to="/auth/register"  className=" mx-3 btn btn-lg btn-primary form__button-create"><small>Create</small></Link></small>
                
                </div>
 
              </form>
              <p className="mt-5 mb-3 text-muted form__copyright"> SongBook App by Claudia Reyna &copy; 2022</p>
        </main>
    </div>
    
  )
}

export default LoginScreen