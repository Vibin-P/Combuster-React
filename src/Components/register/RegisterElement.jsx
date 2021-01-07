import React, { Component } from "react";

class RegisterElement extends Component {
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
                            <div class="col-lg-6 bg-white">
                                <div class="form d-flex align-items-center">
                                    <div class="content">
                                        <form class="text-left form-validate">
                                            <div class="form-group-material">
                                                <input id="register-username" type="text" name="registerUsername" required data-msg="Please enter your username" class="input-material" />
                                                <label for="register-username" class="label-material">Username</label>
                                            </div>
                                            <div class="form-group-material">
                                                <input id="register-email" type="email" name="registerEmail" required data-msg="Please enter a valid email address" class="input-material" />
                                                <label for="register-email" class="label-material">Email Address      </label>
                                            </div>
                                            <div class="form-group-material">
                                                <input id="register-password" type="password" name="registerPassword" required data-msg="Please enter your password" class="input-material" />
                                                <label for="register-password" class="label-material">Password        </label>
                                            </div>
                                            <div class="form-group terms-conditions text-center">
                                                <input id="register-agree" name="registerAgree" type="checkbox" required value="1" data-msg="Your agreement is required" class="checkbox-template" />
                                                <label for="register-agree">I agree with the terms and policy</label>
                                            </div>
                                            <div class="form-group text-center">
                                                <input id="register" type="submit" value="Register" class="btn btn-primary" />
                                            </div>
                                        </form><small>Already have an account? </small><a href="LoginElement.jsx" class="signup">Login</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="copyrights text-center">
                    <p>Design by <a href="https://bootstrapious.com" class="external">Bootstrapious</a></p>
                    {/* <!-- Please do not remove the backlink to us unless you support further theme's development at https://bootstrapious.com/donate. It is part of the license conditions. Thank you for understanding :)--> */}
                </div>
            </div>

        )
    }
}
export default RegisterElement;