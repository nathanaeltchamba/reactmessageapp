import React from 'react'
import { useAuth } from '../context/AuthProvider'

export const SignIn = () => {

    const { signIn } = useAuth()

    return (
        <div className="container mt-5">
            <div className="card">
                <div className="container">
                    <div className="row">
                        <div className="col-md-7">
                            <img className="img-fluid" src="/photos/loginpage.webp" alt="Computer Image" />
                        </div>
                        <div className="col-md-5">
                            <form action="">
                                <h2 className="mt-3 text-center">Sign in with Google</h2>
                                <div className="form-group">
                                    <input
                                        onClick={ signIn }
                                        type="button"
                                        className="btn btn-success btn-block"
                                        value="Sign In With Google">
                                    </input>
                                </div>
                                <h2 className="mt-5"><strong>Sign In</strong></h2>
                                <hr />
                            </form>
                            <form action="" className="mt-3">
                                <div className="form-group">
                                    <input type="email" name="" className="form-control" placeholder="Enter Email" aria-describedby="helpId" />
                                </div>
                                <div className="form-group">
                                    <input type="password" name="" className="form-control" placeholder="Enter Password" aria-describedby="helpId" />
                                </div>
                                <div className="form-check mb-2">
                                    <input type="checkbox" className="form-check-input" name="termsService" value="checkedValue" />
                                    Remember Me
                                </div>
                                <button type="button" className="btn btn-primary btn-block">Sign In</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
