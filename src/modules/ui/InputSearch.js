import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import queryString from 'query-string';

import SvgIcon from '@mui/material/SvgIcon';
import SearchIcon from '@mui/icons-material/Search';
import useForm from '../../hooks/useForm';



const InputSearch = () => {

  const navigate=useNavigate();
  const location=useLocation();

  const {q=''}=queryString.parse(location.search);

  const [formValues, handleChangeForm,reset]=useForm({songSearch:q});

  const handleSubmitSearch=(e) => {
    e.preventDefault();
    navigate(`/search?q=${formValues.songSearch}`);
    reset();
  }
  

  return (
    <form className="d-flex navbar__container-form" onSubmit={handleSubmitSearch}>
                      <input  type="text" placeholder="Search" autoComplete='off' name='songSearch' value={formValues.songSearch} onChange={handleChangeForm}/>
                      <button className="navbar__search-button" type="submit">
                        <SvgIcon component={SearchIcon}/>
                      </button>
    </form>
  )
}

export default InputSearch