import React, { useState } from "react";
import { Link } from "react-router-dom";
import Validation from "./LoginValidation";

function Login() {
  const [values, setValues] = useState({
    email: "",
    password: "",
  });

  const [errors, setErrors] = useState({});
  
  const handleInput = (event) => {
    setValues((prev) => ({
      ...prev,
      [event.target.name]: event.target.value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setErrors(Validation(values));
    // Additional logic for handling form submission can be added here
  };

  return (
    <div className="d-flex justify-content-center align-items-center bg-primary vh-100">
      <div className="bg-white p-3 rounded w-25">
        <h2>Sign in</h2>
        <form action="" onSubmit={handleSubmit}>
          <div className="mb-3">
            <label htmlFor="email">
              {" "}
              <strong>Email</strong>
            </label>
            <input
              type="email"
              name="email"
              placeholder="Enter Email"
              className="form-control rounded-0"
              onChange={handleInput}
            />
            {errors.email && <span className="text-danger">{errors.email}</span>}
          </div>
          <div className="mb-3">
            <label htmlFor="password">
              {" "}
              <strong>Password</strong>
            </label>
            <input
              type="password"
              name="password"
              placeholder="Enter Password"
              className="form-control rounded-0"
              onChange={handleInput}
            />
            {errors.password && <span className="text-danger">{errors.password}</span>}
          </div>
          <button className="btn btn-success w-100 rounded-0">
            {" "}
            <strong>Log in</strong>
          </button>
          <p> You agree to the terms and conditions</p>
          <Link
            to='/signup'
            className="btn btn-default border w-100 bg-light rounded-0 text-decoration-none"
          >
            Create Account
          </Link>
        </form>
      </div>
    </div>
  );
}

export default Login;
