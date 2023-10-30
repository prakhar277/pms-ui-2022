import React from "react";
import { useDispatch } from 'react-redux';
import { LOGIN_SUCCESS } from "../../Actions"
import AuthService from "../../services/AuthService";
import { Link, useNavigate } from "react-router-dom";


const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const loginHandler = async () => {
    let response = await AuthService.login();
    dispatch({
      type: LOGIN_SUCCESS,
      payload: response,
    });

    navigate("/");
  };
  return (
    <div
      className="container-fluid container-p-y flex-1 d-flex align-items-center py-5">

      <div className="card w-100 m-auto loginBox">
        <div className="card-header h4 text-left bg-lite-style-1 py-3 d-flex align-items-center justify-content-between">
          <span>Sign In</span><i class="fa-solid fa-lock-open"></i>
        </div>
        <div className="card-body">
          <div className="form-center">
            <div className="form-group">
              <label for="username" className="d-block text-left">User Name:</label>
              <input type="text" className="form-control" id="username" />
            </div>
            <div className="form-group">
              <label for="pwd" className="d-block text-left">Password:</label>
              <input type="password" className="form-control" id="pwd" />
            </div>
            <div className="form-group text-center">
              <a href="#">Forgot password?</a>
              <br />
              Don't have an account? <Link to="/signup">Sign up</Link>
            </div>

            <div className="btnWrap">
              <button
                type="submit"
                className="btn btn-primary w-100"
                onClick={() => loginHandler()}
              >
                Sign In
              </button>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}

export default Login;