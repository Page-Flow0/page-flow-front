import React from 'react';

const NaverLogin = () => {
    const NAVER_CLIENT_ID = process.env.REACT_APP_Naver_CLIENT_ID;
    const NAVER_REDIRECT_URI = "http://localhost:3000/test";  // 리다이렉트 URL
    const NAVER_AUTH_URL = "https://nid.naver.com/oauth2.0/authorize";

    const handleLogin = () => {
        const redirectUri = encodeURIComponent(NAVER_REDIRECT_URI);
        const naverLoginUrl = `${NAVER_AUTH_URL}?response_type=code&client_id=${NAVER_CLIENT_ID}&redirect_uri=${redirectUri}&state=RANDOM_STATE`;

        // 네이버 로그인 페이지로 리다이렉트
        window.location.href = naverLoginUrl;
    };

    return (
        <img
            src="btnG.png"
            alt="네이버 로그인"
            onClick={handleLogin}
            style={{ cursor: 'pointer', width: '270px', height: '58px' }}
        />
    );
};

export default NaverLogin;
