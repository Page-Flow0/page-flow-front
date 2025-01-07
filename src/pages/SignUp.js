// import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const SignUp = () => {

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
            <div className="d-flex align-items-center my-4">
                <div className="flex-grow-1 border-top"></div> {/* 구분선 */}
            </div>

            {/* 회원약관 동의 영역 */}
            <div className="terms">
                <h3>회원약관 동의</h3>
                <div className="terms-box">
                    <textarea
                        className="terms-text"
                        readOnly
                        value={"[이용약관]\n이용약관입니다\n\n[개인정보 처리방침]\n개인정보 처리방침입니다."}
                    />
                </div>
                <div className="form-check text-start">
                    <input
                        className="form-check-input"
                        type="checkbox"
                        id="termsOfService"
                    />
                    <label className="form-check-label " htmlFor="termsOfService">
                        이용약관 동의 (필수)
                    </label>
                </div>
                <div className="form-check text-start">
                    <input
                        className="form-check-input"
                        type="checkbox"
                        id="privacyPolicy"
                    />
                    <label className="form-check-label" htmlFor="privacyPolicy">
                        개인정보 처리방침 동의 (필수)
                    </label>
                </div>
                <div className="form-check text-start">
                    <input
                        className="form-check-input"
                        type="checkbox"
                        id="marketingConsent"
                    />
                    <label className="form-check-label" htmlFor="marketingConsent">
                        마케팅 정보 수신 동의 (선택)
                    </label>
                </div>
            </div>

            <button type="submit" className="btn btn-primary mt-3">
                Sign Up
            </button>

        </div>

        
    );
};

export default SignUp;
