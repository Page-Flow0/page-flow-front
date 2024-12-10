import React, { useEffect, useState } from 'react';
import { signInWithEmailAndPassword } from 'firebase/auth';
import {at} from '../auth/fb'

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const auth = at;
    
    const handleLogin = async () => {
        try {
            await signInWithEmailAndPassword(auth, email, password);
            alert('Login successful');
        } catch (error) {
            alert('Login failed: ' + error.message);
        }
    };

    const intit = async() =>{
        await auth.authStateReady();
    }

    useEffect(()=>{
        intit();
    },[]);

    return (
        <div className="LoginBox">
            <h2>Login</h2>
            <br/>
            <input
                type="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="form-control my-2"
            />
            <input
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="form-control my-2"
            />
            <div className='ButtonBox'>
                <button onClick={handleLogin} class="btn btn-dark">Login</button>
                <button onClick={handleLogin} class="btn btn-dark">SignUp</button>
            </div>
        </div>
    );
};

export default Login;
