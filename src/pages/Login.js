import React, { useState } from 'react';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { Link } from 'react-router-dom';
import {at} from '../auth/fb'

const Login = () => {
    const [ID, setID] = useState('');
    const [password, setPassword] = useState('');
    const auth = at;
    
    const handleLogin = async () => {
        try {
            await signInWithEmailAndPassword(auth, ID, password);
            alert('Login successful');
        } catch (error) {
            alert('Login failed: ' + error.message);
        }
    };



    return (
        <div className="LoginBox">
            <h2>Login</h2>
            <br/>
            <input
                type="text"
                value={ID}
                placeholder="ID"
                onChange={(e) => setID(e.target.value)}
                className="form-control my-2"
            />
            <input
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="form-control my-2"
            />
            
            <div className='checkBox'>
                <div class="form-check form-check-inline">
                    <input class="form-check-input" type="checkbox" id="inlineCheckbox1" value="option1"/>
                        <label class="form-check-label" for="inlineCheckbox1">로그인 상태 유지</label>
                </div>
                <div class="form-check form-check-inline">
                    <input class="form-check-input" type="checkbox" id="inlineCheckbox2" value="option2"/>
                        <label class="form-check-label" for="inlineCheckbox2">아이디 저장</label>
                </div>
            </div>
            <div className='ButtonBox'>
                <button onClick={handleLogin} class="btn btn-dark">Login</button>
            </div>
            <div className="d-flex align-items-center my-4">
                <div className="flex-grow-1 border-top"></div> {/* 구분선 */}
                <span className="mx-3 text-muted">간편로그인</span>
                <div className="flex-grow-1 border-top"></div> {/* 구분선 */}
            </div>
            <div>
                <Link to="/signup">Don't have an account? Sign Up</Link>
            </div>
        </div>
    );
};

export default Login;
