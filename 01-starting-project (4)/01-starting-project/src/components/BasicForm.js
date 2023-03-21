import useInput from "../hooks/use-input";
const isNotEmpty = value=>value.trim()!=='';
const isEmail = value =>value.includes('@');
const BasicForm = (props) => {
  const {
    value: firstNameValue,
    isValid: firstNameIsVlaid,
    hasError:firstNamehasError,
    vlaueChangeHandler: firstNameChangeHandler,
    inputBlurHandler: firstNameBlurHandler,
    reset: resetFirstName
  } = useInput(isNotEmpty);
  const {
    value: lastNameValue,
    isValid: lastNameIsVlaid,
    hasError:lastNamehasError,
    vlaueChangeHandler: lastNameChangeHandler,
    inputBlurHandler: lastNameBlurHandler,
    reset: resetLastName
  }=useInput(isNotEmpty);
  const {
    value: emailValue,
    isValid: emailIsVlaid,
    hasError:emailhasError,
    vlaueChangeHandler: emailChangeHandler,
    inputBlurHandler: emailBlurHandler,
    reset: resetEmail
  }=useInput(isEmail);
  let formIsValid = false;
  if(firstNameIsVlaid && lastNameIsVlaid && emailIsVlaid){
    formIsValid= true;
  }
  const submitHandler = event =>{
    event.preventDefault();
    if(!formIsValid){
      return;
    }
    console.log('submitted!');
    console.log(firstNameValue,lastNameValue,emailValue);
    resetFirstName();
    resetLastName();
    resetEmail();

  }
  const firstNameClasses= firstNamehasError? ' form-control invalid':'form-control'
  const lastNameClasses= lastNamehasError? ' form-control invalid':'form-control'
  const emailClasses= emailhasError? ' form-control invalid':'form-control'

  return (
    <form onSubmit={submitHandler}>
      <div className="control-group">
        <div className={firstNameClasses}>
          <label htmlFor="name">First Name</label>
          <input
            type="text"
            id="name"
            value={firstNameValue}
            onChange={firstNameChangeHandler}
            onBlur={firstNameBlurHandler}
          />
          {firstNamehasError && <p className="error-text">Please enter a first name.</p>}
        </div>
        <div className={lastNameClasses}>
          <label htmlFor="name">Last Name</label>
          <input
            type="text"
            id="name"
            value={lastNameValue}
            onChange={lastNameChangeHandler}
            onBlur={lastNameBlurHandler}
          />
          {lastNamehasError && <p className="error-text">Please enter a last name.</p>}
        </div>
      </div>
      <div className={emailClasses}>
        <label htmlFor="name">E-Mail Address</label>
        <input
          type="text"
          id="name"
          value={emailValue}
          onChange={emailChangeHandler}
          onBlur={emailBlurHandler}
        />
        {emailhasError && <p className="error-text">Please enter a email.</p>}
      </div>
      <div className="form-actions">
        <button disabled={!formIsValid}>Submit</button>
      </div>
    </form>
  );
};

export default BasicForm;
