import React,{useEffect} from "react";

const KakaLogin = () =>{
    const jsKey = process.env.REACT_APP_Kakao_jskey;
    const Kakao = window.Kakao;
    const initKakao = () => {
        if (Kakao && !Kakao.isInitialized()) {
            Kakao.init(jsKey);
            console.log(Kakao.isInitialized());
            Kakao.Auth.authorize({
                redirectUri: 'http://localhost:3000/ktest',
            });
        }
    };


    return(
        <div className="login-button-container">
            <img
                src="kakao_login_large_narrow.png"
                className="login-button-image"
                alt="카카오 로그인 버튼"
                style={{ cursor: "pointer" }}
                onClick={() => {
                    initKakao();
                }}
            />
        </div>
    )
}

export default KakaLogin;