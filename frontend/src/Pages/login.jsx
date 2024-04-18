import React, { useState } from "react";
import axios from "axios";
import { toast, ToastContainer } from "react-toastify";
import { useNavigate } from "react-router-dom";
import Layout from "../components/Layout/layout.jsx";
function Login() {
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");
  const navigate = useNavigate();
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post("http://localhost:5000/api/login", {
        email,
        password,
      });
      if (res.data.success) {
        toast.success("Logged in successfully");
        navigate("/");
      } else {
        toast.error("Log in Failed");
      }
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <Layout>
      <div className="register">
        <h1>Login</h1>
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label htmlFor="exampleInputEmail" className="form-label">
              E-mail
            </label>
            <input
              type="E-mail"
              value={email}
              onChange={(e) => {
                setemail(e.target.value);
              }}
              className="form-control"
              id="exampleInputEmail"
              placeholder="Enter a valid e-mail"
              required
            />
            <div id="emailHelp" className="form-text"></div>
          </div>
          <div className="mb-3">
            <label htmlFor="exampleInputPassword" className="form-label">
              Password
            </label>
            <input
              type="password"
              value={password}
              onChange={(e) => {
                setpassword(e.target.value);
              }}
              className="form-control"
              id="exampleInputPassword"
              placeholder="Atleast 8 characters"
              required
            />
          </div>

          <button type="submit" className="btn btn-primary ">
            Login
          </button>
        </form>
        <ToastContainer/>
      </div>
    </Layout>
  );
}

export default Login;


