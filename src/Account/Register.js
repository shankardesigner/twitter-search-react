import React, { useReducer, useState } from 'react';
import { Redirect } from "react-router-dom";

import { Link } from "react-router-dom";
import { registerReducer, registerInitialState } from '../reducers/registerReducer';
import { registerAccount } from '../actions/accountActions';

function Register({isAuth}) {
  const [state, dispatch] = useReducer(registerReducer, registerInitialState);
  const [user, setUser] = useState({});
  
  if(isAuth) {
    return <Redirect to="/" />
  }

  const onchangeHandler = (e) => {
    setUser({
      ...user,
      [e.target.name] : e.target.value
    })
  }

  const submitHandler = (e) => {
    e.preventDefault();
    registerAccount(dispatch, user);
  }

  if(state.message.status === 201) {
    return <Redirect to ="/login" />
  }

  return (
    <>
      <div className="container py-4 px-md-0 d-flex align-items-center">
        <div className="w-100">
          <div className="row row-grid justify-content-center align-items-center">
            <div className="col-sm-8 col-lg-6 col-xl-5 order-lg-2">
              <div className="card shadow zindex-100 mb-0">
                <div className="card-body px-md-5 py-5">
                  <div className="mb-4">
                    <h6 className="h3">Register</h6>
                    <p className="text-muted mb-0">
                      Create your account to continue.
                    </p>
                  </div>
                  <span className="clearfix"></span>
                  <form role="form" onSubmit={(e) => submitHandler(e)}>
                  <div className="form-group">
                      <label className="form-control-label">
                        Full name
                      </label>
                      <div className="input-group input-group-merge mb-3">
                        <input
                          type="text"
                          className="form-control"
                          name="name"
                          placeholder="jhon smith"
                          onChange={(e) => onchangeHandler(e)}
                        />
                      </div>
                    </div>
                    <div className="form-group">
                      <label className="form-control-label">
                        Email address
                      </label>
                      <div className="input-group input-group-merge mb-3">
                        <input
                          type="email"
                          className="form-control"
                          name="email"
                          placeholder="name@example.com"
                          onChange={(e) => onchangeHandler(e)}
                        />
                      </div>
                    </div>
                    <div className="form-group mb-4">
                    <label className="form-control-label">Password</label>
                      <div className="input-group input-group-merge">
                        <input
                          type="password"
                          className="form-control"
                          name="password"
                          placeholder="Password"
                          onChange={(e) => onchangeHandler(e)}
                        />
                      </div>
                    </div>
                    <div className="mt-4">
                      <button
                        type="submit"
                        className="btn btn-primary btn-icon rounded-pill"
                      >
                        <span className="btn-inner--text">Sign in</span>
                      </button>
                    </div>
                  </form>
                </div>
                <div className="card-footer px-md-5 justify-content-between d-flex">
                  <small>Already registered?</small>
                  <Link to="/login" className="small font-weight-bold">
                    Sign in
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Register;
