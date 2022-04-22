import { useState } from "react"


const useForm = (initialState) => {

  const [formValues, setFormValues] = useState(initialState);

  //Pending create function for clear forma Values//
  //
  ///
  ///
  ///

  const handleChangeForm=({target}) => {
    setFormValues({...formValues,[target.name]:target.value})
  }
  return [formValues, handleChangeForm];
}

export default useForm;