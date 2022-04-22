import React from 'react';
import { useDispatch } from 'react-redux';

import { startRegister } from '../../../actions/auth';
import useForm from '../../../hooks/useForm';

const RegisterScreen = () => {

  const dispatch=useDispatch();
  const [formValues, handleChangeForm]=useForm({name:'',email:'',password:''});

  const handleSubmitRegister=(e) => {
    e.preventDefault();
    dispatch(startRegister(formValues.name,formValues.email,formValues.password));
  }
  return (
    <div className='login__container text-center'>
        <main className="form-signin">
              <form onSubmit={handleSubmitRegister}>
                <img  src="../../../../assets/undraw_reading_book_re_kqpk.svg" alt="" width="150" height="150"/>
                <h1 className="h3 mb-3 fw-normal">Create Account</h1>

                <div className="form-floating">
                  <input  type="text" className="form-control" id="floatingInputName" placeholder="name" name="name" value={formValues.name} onChange={handleChangeForm}/>
                  <label htmlFor="floatingInputName">Name:</label>
                </div>
                <div className="form-floating">
                  <input type="email" className="form-control" id="floatingInput" placeholder="name@example.com" name="email" value={formValues.email} onChange={handleChangeForm}/>
                  <label htmlFor="floatingInput">Email:</label>
                </div>
                <div className="form-floating">
                  <input type="password" className="form-control" id="floatingPassword" placeholder="Password" name="password" value={formValues.password} onChange={handleChangeForm}/>
                  <label htmlFor="floatingPassword">Password:</label>
                </div>

                <button className="w-100 btn btn-lg btn-primary form__button" type="submit">Sign up</button>
              </form>
              <p className="mt-5 mb-3 text-muted form__copyright"> SongBook App by Claudia Reyna &copy; 2022</p>
        </main>
    </div>
    
  )
}

export default RegisterScreen