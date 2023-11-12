import { useState } from "react";
import Input from "./Input";
export default function Login() {
 //1. Managing & Getting User Input via State & Generic Handlers

 const [enteredValues, setEnteredValues] = useState({
  email: "",
  password: "",
 });

 const [didEdit, setDidEdit] = useState({
  email: false,
  password: false,
 });

 // And we can check whether emailIsInvalid

 // by not checking for whether it still has the initial value

 // but by instead keeping this check and combining this check

 // with didEdit.email.

 // If the user did edit the email address

 // and the email then does not include an @ symbol,

 // I want to set emailIsInvalid as true
 const emailIsInValid = didEdit.email && !enteredValues.email.includes("@");
 const passwordIsInValid =
  didEdit.password && enteredValues.password.trim().length < 6;
 // !!! BLUR RA NGOÀI VÀ TRONG INPUT KHÔNG CÓ @
 function handleSubmit(event) {
  event.preventDefault();
  console.log(enteredValues);
  //4. Resetting Form
  setEnteredValues({
   email: "",
   password: "",
  });
 }

 // And indeed, combining validation on every keystroke

 // with validation on lost focus

 // and resetting that focus state

 // whenever the user starts typing again

 // can be a good pattern for validating user input.
 function handleInputChange(identifier, value) {
  setEnteredValues((prevValues) => ({
   ...prevValues,
   [identifier]: value,
  }));
  setDidEdit((prevEdit) => ({
   ...prevEdit,
   [identifier]: false,
  }));
 }

 //6. Validating Input Upon Lost Focus (Blur)
 function handleInputBlur(identifier) {
  setDidEdit((prevEdit) => ({
   ...prevEdit,
   [identifier]: true,
  }));
 }
 return (
  <form onSubmit={handleSubmit}>
   <h2>Login</h2>

   <div className="control-row">
    //10. Building & Using a Reusable Input Component
    <Input
     label="Email"
     id="email"
     type="email"
     name="email"
     onChange={(event) => handleInputChange("email", event.target.value)}
     onBlur={() => handleInputBlur("email")}
     value={enteredValues.email}
     error={emailIsInValid && "Please enter a valid email!"}
    />
    <Input
     label="Password"
     id="password"
     type="password"
     name="password"
     onChange={(event) => handleInputChange("password", event.target.value)}
     onBlur={() => handleInputBlur("password")}
     value={enteredValues.password}
     error={passwordIsInValid && "Please enter a valid password!"}
    />
   </div>

   <p className="form-actions">
    <button className="button button-flat">Reset</button>
    <button className="button">Login</button>
   </p>
  </form>
 );
}
