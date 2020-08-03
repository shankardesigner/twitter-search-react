import React from "react";

function Login() {
  return (
    <>
      <div className="container py-5 px-md-0 d-flex align-items-center">
        <div className="w-100">
          <div className="row row-grid justify-content-center align-items-center">
            <div className="col-sm-8 col-lg-6 col-xl-5 order-lg-2">
              <div className="card shadow zindex-100 mb-0">
                <div className="card-body px-md-5 py-5">
                  <div className="mb-4">
                    <h6 className="h3">Login</h6>
                    <p className="text-muted mb-0">
                      Sign in to your account to continue.
                    </p>
                  </div>
                  <span className="clearfix"></span>
                  <form role="form">
                    <div className="form-group">
                      <label className="form-control-label">
                        Email address
                      </label>
                      <div className="input-group input-group-merge mb-3">
                        <input
                          type="email"
                          className="form-control"
                          id="input-email"
                          placeholder="name@example.com"
                        />
                      </div>
                    </div>
                    <div className="form-group mb-4">
                    <label className="form-control-label">Password</label>
                      <div className="input-group input-group-merge">
                        <input
                          type="password"
                          className="form-control"
                          id="input-password"
                          placeholder="Password"
                        />
                      </div>
                    </div>
                    <div className="mt-4">
                      <button
                        type="button"
                        className="btn btn-primary btn-icon rounded-pill"
                      >
                        <span className="btn-inner--text">Sign in</span>
                      </button>
                    </div>
                  </form>
                </div>
                <div className="card-footer px-md-5 justify-content-between d-flex">
                  <small>Not registered?</small>
                  <a href="#" className="small font-weight-bold">
                    Create account
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Login;
