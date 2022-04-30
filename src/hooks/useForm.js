import { useState } from "react"


const useForm = (initialState) => {

  const [formValues, setFormValues] = useState(initialState);

  const reset=() => {
    setFormValues(initialState);
  }
  const resetActiveSongForm=(resetState) => {
    setFormValues(resetState);
  }

  const handleChangeForm=({target}) => {
    setFormValues({...formValues,[target.name]:target.value})
  }
  return [formValues, handleChangeForm, reset, resetActiveSongForm];
}

export default useForm;