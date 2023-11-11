import { useState } from "react";
export default function Login() {
  //1. Managing & Getting User Input via State & Generic Handlers

  function handleSubmit(event) {
    event.preventDefault();
    console.log(enteredValues);
    //4. Resetting Form
    setEnteredValues({
      email: "",
      password: "",
    });
  }

  const [enteredValues, setEnteredValues] = useState({
    email: "",
    password: "",
  });

  function handleInputChange(identifier, value) {
    setEnteredValues((prevValues) => ({
      ...prevValues,
      [identifier]: value,
    }));
  }

  return (
    <form onSubmit={handleSubmit}>
      <h2>Login</h2>

      <div className="control-row">
        <div className="control no-margin">
          <label htmlFor="email">Email</label>
          <input
            onChange={(event) => handleInputChange("email", event.target.value)}
            id="email"
            type="email"
            name="email"
            values={enteredValues.email}
          />
        </div>

        <div className="control no-margin">
          <label htmlFor="password">Password</label>
          <input
            onChange={(event) =>
              handleInputChange("password", event.target.value)
            }
            id="password"
            type="password"
            name="password"
            values={enteredValues.password}
          />
        </div>
      </div>

      <p className="form-actions">
        <button className="button button-flat">Reset</button>
        <button className="button">Login</button>
      </p>
    </form>
  );
}
