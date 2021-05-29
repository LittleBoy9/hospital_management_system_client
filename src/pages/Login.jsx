import React from 'react';
import './css/Login.css';

import * as flatIcon from "react-icons/fc";

export default function Login() {

 
  return (
    <div className="container-fluid px-1 px-md-5 px-lg-1 px-xl-5 py-5 mx-auto main">
      <div className="card card0 border-0">
        <div className="row d-flex">
          <div className="col-lg-6">
            <div className="card1 pb-5">
              <div className="row">
                <img src="https://i.imgur.com/CXQmsmF.png" className="logo" />
              </div>
              <div className="row px-3 justify-content-center mt-4 mb-5 border-line">
                <img src="https://i.imgur.com/uNGdWHi.png" className="image" />
              </div>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="card2 card border-0 px-4 py-5">
            <div className="row mb-4 px-3">
                  <div>
                      <h6 className="mb-0 mr-4 mt-2 text-center">Sign in with
                        <span className="google text-center m-2">
                          <flatIcon.FcGoogle />
                        </span>
                      </h6>
                     
                  </div>
                      
                    </div>
              <div className="row px-3 mb-4">

                <div className="line">
                </div>
                <small className="or text-center">OR</small>
                <div className="line">
                </div>
              </div>
              <div className="row px-3">
                <label className="mb-1">
                  <h6 className="mb-0 text-md">Email Address</h6>
                </label>
                <input className="mb-4" type="text" name="email" placeholder="Enter a valid email address" />
              </div>
              <div className="row px-3">
                <label className="mb-1">
                  <h6 className="mb-0 text-md">Password</h6>
                </label>
                <input type="password" name="password" placeholder="Enter password" />
              </div>
              <div className="row px-3 mb-4">
                
                <a href="#" className="ml-3 mt-1 mb-1 text-sm">Forgot Password?</a>
              </div>

              <div className="row mt-5 mb-3 ml-4 px-3">
                <button type="submit" className="btn btn-blue text-center">Login</button>
              </div>

              <div className="row mb-4 px-3">
                <small className="font-weight-bold">Don't have an account?
                <a className="text-danger ">Register</a>
                </small>
              </div>
            </div>
          </div>
        </div>
        <div className="bg-blue py-4">
          <div className="row px-3"> <small className="ml-4 ml-sm-5 mb-2">Copyright &copy; 2019. All rights reserved.</small>
            <div className="social-contact ml-4 ml-sm-auto">
              {/* <span className="fa fa-facebook mr-4 text-sm"></span>
              <span className="fa fa-google-plus mr-4 text-sm"></span>
              <span className="fa fa-linkedin mr-4 text-sm"></span>
              <span className="fa fa-twitter mr-4 mr-sm-5 text-sm"></span> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}  