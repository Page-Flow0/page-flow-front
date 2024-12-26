import { useEffect } from "react";
import { GoogleLogin, GoogleOAuthProvider } from "@react-oauth/google"
const GoogleL = () => {
    const googleCI = process.env.REACT_APP_Google_CI

    return (
        <GoogleOAuthProvider clientId= {googleCI}>
            <div className="login-button-container">
                <GoogleLogin />
            </div>
        </GoogleOAuthProvider>
    );
};

export default GoogleL;