// import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const SignUp = () => {
    // const [email, setEmail] = useState('');
    // const [password, setPassword] = useState('');
    return (
        
        <div className="SignUpBox">
            <h2>Sign Up</h2>
            <br />
            <div className="input-group">
                <label htmlFor="nameInput" className="form-label label-left">
                    Nickname
                </label>
                <input
                    type="text"
                    id="nameInput"
                    className="form-control"
                />
            </div>
            <div className="input-group">
                <label htmlFor="idInput" className="form-label label-left">
                    Name
                </label>
                <input
                    type="text"
                    id="idInput"
                    className="form-control"
                />
            </div>
            <div className="input-group">
                <label htmlFor="emailInput" className="form-label me-2 label-left">
                    Email
                </label>
                <input
                    type="text"
                    id="emailInput"
                    className="form-control"
                    aria-label="Username"
                />
                <span className="input-group-text">@</span>
                <input
                    type="text"
                    id="domainInput"
                    className="form-control"
                    aria-label="Domain"
                />
            </div>
            <div className="input-group">
                <label htmlFor="passwordInput" className="form-label label-left">
                    Password
                </label>
                <input
                    type="password"
                    id="passwordInput"
                    // value={password}
                    // onChange={(e) => setPassword(e.target.value)}
                    className="form-control"
                />
            </div>
            <div className="input-group">
                <label htmlFor="rePasswordInput" className="form-label label-left">
                    Re-enter Password
                </label>
                <input
                    type="password"
                    id="rePasswordInput"
                    // value={password}
                    // onChange={(e) => setPassword(e.target.value)}
                    className="form-control"
                />
            </div>

            <div>
                <Link to="/login">Already have an account? Login</Link>
            </div>
        </div>

        
    );
};

export default SignUp;
