import React from "react";
import { Link } from "react-router-dom";

const SignUp = () => {
return(
    <div class="container-fluid container-p-y flex-1 d-flex align-items-center py-5">      
        <div className="card w-100 m-auto loginBox">
          <div className="card-header h4 text-left bg-lite-style-1 py-3 d-flex align-items-center justify-content-between">
           <span>Sign Up</span><i class="fa-solid fa-user-plus"></i>
          </div>
          <div class="card-body">
            <div class="form-center">
              <div class="form-group">
                <label for="email" className="d-block text-left">Email Address <span class="req">*</span> :</label>
                <input type="email" class="form-control" id="email" />
              </div>
              <div class="form-group">
                <label for="username" className="d-block text-left">User Name <span class="req">*</span> :</label>
                <input type="text" class="form-control" id="username" value="" />
              </div>
              <div class="form-group">
                <label for="username" className="d-block text-left">Phone No <span class="req">*</span> :</label>
                <input type="text" class="form-control" id="username" value="" />
              </div>
              <div class="form-group">
                <label for="pwd" className="d-block text-left">Password <span class="req">*</span> :</label>
                <input type="password" class="form-control" id="pwd" value="" />
              </div>
              <div class="form-group">
                <label for="ConfirmPwd" className="d-block text-left">Confirm Password <span class="req">*</span> :</label>
                <input type="password" class="form-control" id="ConfirmPwd" value="" />
              </div>
              <div class="form-group text-center">
                Already Have Account ? <Link to="/login">Sign In</Link>
              </div>

              <div class="btnWrap">
                <button type="submit" class="btn btn-primary w-100">Sign Up</button>
              </div>
            </div>
          </div>          
      </div>
    </div>
  );
};

export default SignUp;