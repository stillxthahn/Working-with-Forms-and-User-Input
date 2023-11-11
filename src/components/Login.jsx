import { useRef, useState } from "react";

export default function Login() {
 const [emailIsInValid, setEmailIsInValid] = useState(false);
 //2. Getting User Input via Refs
 const email = useRef();
 const password = useRef();
 function handleSubmit(event) {
  event.preventDefault();
  const enteredEmail = email.current.value;
  const enteredPassword = password.current.value;

  //7. Validating Input Upon Form Submission
  const emailIsValid = enteredEmail.includes("@");

  if (!emailIsValid) {
   setEmailIsInValid(true);
   return;
  }

  setEmailIsInValid(false);
 }

 return (
  <form onSubmit={handleSubmit}>
   <h2>Login</h2>

   <div className="control-row">
    <div className="control no-margin">
     <label htmlFor="email">Email</label>
     <input ref={email} id="email" type="email" name="email" />
     <div className="control-error">
      {emailIsInValid && <p>Please enter a valid email address!</p>}
     </div>
    </div>

    <div className="control no-margin">
     <label htmlFor="password">Password</label>
     <input ref={password} id="password" type="password" name="password" />
    </div>
   </div>

   <p className="form-actions">
    <button className="button button-flat">Reset</button>
    <button className="button">Login</button>
   </p>
  </form>
 );
}
