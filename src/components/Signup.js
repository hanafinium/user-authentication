import React, { useState } from "react";
import fb from "../fb";

function Signup() {
  const auth = fb.auth();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const clearForm = () => {
    setEmail("");
    setPassword("");
  };
  return (
    <div id="form">
      <div id="form-elem">
        <label for="email">Email</label>
        <input
          type="text"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        ></input>
      </div>
      <div id="form-elem">
        <label for="password">Password</label>
        <input
          type="password"
          required
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        ></input>
      </div>
      <div>
        <button
          id="btn"
          onClick={() => {
            auth.createUserWithEmailAndPassword(email, password);
            clearForm();
          }}
        >
          Sign Up
        </button>
      </div>
      <p>
        Already a user? <a href="/signin">Sign In</a>
      </p>
    </div>
  );
}

export default Signup;
