import React from 'react'
import { Link } from 'react-router-dom'

export const SignUp = () => {
    return (
        <div className="container mt-4">
            <h3 className="text-center mt-5" >Sign Up</h3>
            <hr />
            <div className="card">
                <div className="row mt-3 mb-3 mr-3 ml-3">
                    <div className="col-md-5">
                        <form action="">
                            <div className="form-group">
                                <input type="text" name="firstName" className="form-control" placeholder="Your First Name" aria-describedby="helpId" />
                            </div>
                            <div className="form-group">
                                <input type="text" name="lastName" className="form-control" placeholder="Your Last Name" aria-describedby="helpId" />
                            </div>
                            <div className="form-group">
                                <input type="email" name="email" className="form-control" placeholder="example@gmail.com" aria-describedby="helpId" />
                            </div>
                            <div className="form-group">
                                <input type="password" name="password" className="form-control" placeholder="Password" aria-describedby="helpId" />
                            </div>
                            <div className="form-group">
                                <input type="password" name="confirmPassword" className="form-control" placeholder="Re-Type Password" aria-describedby="helpId" />
                            </div>
                            <div className="form-check mb-2">
                                <input type="checkbox" className="form-check-input" name="termsService" value="checkedValue" />
                                I agree to all the <a href="#">terms of service</a>
                            </div>
                        </form>
                        <button type="button" className="btn btn-primary btn-block">Sign Up</button>
                    </div>
                    <div className="col-md-7">
                        <img className="img-fluid" src="/photos/signup_photo.webp" alt="Sign Up Image" />
                    </div>
                </div>
            </div>
            <div className="card">
                <p className="text-center mt-2" >Already a member? <Link to="/src/views/SignIn.jsx">Log in here</Link></p>
            </div>
        </div>
    )
}
