import React, { Component } from "react";
//import '../../Styles/LoginElement.css';

class LoginElement extends Component {
    render() {
        return (
            <div class="login-page">
                <div class="container d-flex align-items-center">
                    <div class="form-holder has-shadow">
                        <div class="row">
                            {/* <!-- Logo & Information Panel--> */}
                            <div class="col-lg-6">
                                <div class="info d-flex align-items-center">
                                    <div class="content">
                                        <div class="logo">
                                            <h1>EnerTek Combustor</h1>
                                        </div>
                                        <p>A product powerd by Vaigunth EnerTek (Pvt.) Ltd.</p>
                                    </div>
                                </div>
                            </div>
                            {/* <!-- Form Panel    --> */}
                            <div class="col-lg-6">
                                <div class="form d-flex align-items-center">
                                    <div class="content">
                                        <form method="get" class="form-validate mb-4">
                                            <div class="form-group">
                                                <input id="login-username" type="text" name="loginUsername" required data-msg="Please enter your username" class="input-material" />
                                                <label for="login-username" class="label-material">User Name</label>
                                            </div>
                                            <div class="form-group">
                                                <input id="login-password" type="password" name="loginPassword" required data-msg="Please enter your password" class="input-material" />
                                                <label for="login-password" class="label-material">Password</label>
                                            </div>
                                            <button type="submit" class="btn btn-primary">Login</button>
                                        </form><a href="#" class="forgot-pass">Forgot Password?</a><br></br><small>Do not have an account? </small><a href="RegisterElement.html" class="signup">Signup</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="copyrights text-center">
                    <div class="container-fluid text-center">
                        {/* <!-- Please do not remove the backlink to us unless you support us at https://bootstrapious.com/donate. It is part of the license conditions. Thank you for understanding :)--> */}
                        <p class="no-margin-bottom">2021 &copy; Powered By <a href="https://bootstrapious.com/p/bootstrap-4-dark-admin">Vaigunth EnerTek (Pvt.) Ltd.</a>.</p>
                    </div>
                </div>
                
            </div>
        )
    }
}
export default LoginElement;