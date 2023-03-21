import { useState } from "react";


const useInput = (validateValue) => {
  const [enteredValue, setEnteredValue] = useState("");
  const [isTouched, setIsTouched] = useState(false);
  const valueIsValid = validateValue(enteredValue);
  const hasError = !valueIsValid && isTouched;
  const vlaueChangeHandler = (event) => {
    setEnteredValue(event.target.value);
  };
  const inputBlurHandler = (event) => {
    setIsTouched(true);
  };
  const reset = ()=>{
    setEnteredValue('');
    setIsTouched(false);

  }
  return {
    value: enteredValue,
    isValid: valueIsValid,
    hasError,
    vlaueChangeHandler,
    inputBlurHandler,
    reset
  };
};
export default useInput;