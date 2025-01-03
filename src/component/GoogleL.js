import React from "react";

const GoogleL = () => {
    const googleCI = process.env.REACT_APP_Google_CI;

    const handleLogin = () => {
        const redirectUri = "http://localhost:3000/gtest"; // 리다이렉트 URL
        const state = "RANDOM_STATE"; // 보안을 위한 state 값
        const scope = "openid email profile"; // 요청 권한

        const authUrl = `https://accounts.google.com/o/oauth2/v2/auth?client_id=${googleCI}&redirect_uri=${encodeURIComponent(
            redirectUri
        )}&response_type=code&scope=${encodeURIComponent(
            scope
        )}&state=${state}`;

        window.location.href = authUrl; // 구글 인증 서버로 리다이렉트
    }; 

    return (
        <div className="login-button-container">
            <img
                src="web_neutral_sq_ctn@4x.png"
                className="login-button-image"
                alt="구글 로그인 버튼"
                style={{ cursor: "pointer" }}
                onClick={handleLogin}
            />
        </div>
    );
};

export default GoogleL;
