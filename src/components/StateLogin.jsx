import { useState } from "react";
import Input from "./Input";
import { isEmail, isNotEmpty, hasMinLength } from "../util/validation";
import { useInput } from "../hooks/useInput";
export default function Login() {
 //1. Managing & Getting User Input via State & Generic Handlers
 const {
  value: emailValue,
  handleInputChange: handleEmailChange,
  handleInputBlur: handleEmailBlur,
  hasError: emailHasError,
 } = useInput("", (value) => isEmail(value) && isNotEmpty(value));

 const {
  value: passwordValue,
  handleInputChange: handlePasswordChange,
  handleInputBlur: handlePasswordBlur,
  hasError: passwordHasError,
 } = useInput("", (value) => hasMinLength(value, 6));

 // !!! BLUR RA NGOÀI VÀ TRONG INPUT KHÔNG CÓ @
 function handleSubmit(event) {
  event.preventDefault();
  if (emailHasError || passwordHasError) {
   return;
  }
  console.log(emailValue, passwordValue);
 }

 // And indeed, combining validation on every keystroke

 // with validation on lost focus

 // and resetting that focus state

 // whenever the user starts typing again

 // can be a good pattern for validating user input.
 // 10. Building & Using a Reusable Input Component

 return (
  <form onSubmit={handleSubmit}>
   <h2>Login</h2>
   <div className="control-row">
    <Input
     label="Email"
     id="email"
     type="email"
     name="email"
     onChange={handleEmailChange}
     onBlur={handleEmailBlur}
     value={emailValue}
     error={emailHasError && "Please enter a valid email!"}
    />
    <Input
     label="Password"
     id="password"
     type="password"
     name="password"
     onChange={handlePasswordChange}
     onBlur={handlePasswordBlur}
     value={passwordValue}
     error={passwordHasError && "Please enter a valid password!"}
    />
   </div>
   <p className="form-actions">
    <button className="button button-flat">Reset</button>
    <button className="button">Login</button>
   </p>
  </form>
 );
}
