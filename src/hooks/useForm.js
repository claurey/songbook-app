import { useState } from "react"


const useForm = (initialState) => {

  const [formValues, setFormValues] = useState(initialState);

  const reset=() => {
    setFormValues(initialState);
  }

  const handleChangeForm=({target}) => {
    setFormValues({...formValues,[target.name]:target.value})
  }
  return [formValues, handleChangeForm, reset];
}

export default useForm;