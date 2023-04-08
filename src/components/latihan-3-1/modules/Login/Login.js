import React from "react";
import { useState } from "react";
import { Navigate } from "react-router-dom";

export default function Login() {
  const objLogin = {
    email: "",
    password: "",
  };

  const [successLogin, setSuccseesLogin] = useState(false);
  const [login, setLogin] = useState(objLogin);

  const handleSubmit = (e) => {
    e.preventDefault();
    const email = login.email;
    const password = login.password;
    if (email === "irvanrizky58@gmail.com" && password === "12345") {
      localStorage.setItem("isLogin", true);
      setSuccseesLogin(true);
    } else {
      alert("Login gagal periksa kembali email dan password");
    }
  };

  return successLogin ? (
    <Navigate to="/home" replace={true} />
  ) : (
    <div className="vh-100 d-flex align-items-center">
      <main className="form-signin w-100">
        <form className="w-50 m-auto" onSubmit={handleSubmit}>
          <h1 className="h3 mb-3 fw-bold text-center">SIGN IN</h1>

          <div className="form-floating">
            <input
              type="email"
              className="form-control"
              id="floatingInput"
              placeholder="name@example.com"
              onChange={(e) => setLogin({ ...login, email: e.target.value })}
            />
            <label htmlFor="floatingInput">Email address</label>
          </div>
          <div className="form-floating mt-2">
            <input
              type="password"
              className="form-control"
              id="floatingPassword"
              placeholder="Password"
              onChange={(e) => setLogin({ ...login, password: e.target.value })}
            />
            <label htmlFor="floatingPassword">Password</label>
          </div>

          <button
            className="w-100 btn btn-lg btn-primary mt-4 fw-bold"
            type="submit"
          >
            Sign In
          </button>
        </form>
      </main>
    </div>
  );
}
