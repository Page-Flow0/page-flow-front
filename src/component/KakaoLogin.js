import React,{useEffect} from "react";

const KakaLogin = () =>{
    const initKakao = () => {
        const jsKey = process.env.REACT_APP_Kakao_jskey;
        const Kakao = window.Kakao;
        if (Kakao && !Kakao.isInitialized()) {
            Kakao.init(jsKey);
            console.log(Kakao.isInitialized());
        }
    };

    useEffect(() => {
        initKakao();
    }, []);

    return(
        <div className="login-button-container">
            <a id="kakao-login-btn" href="javascript:loginWithKakao()">
                <img
                    src="kakao_login_large_narrow.png"
                    className="login-button-image"
                    alt="카카오 로그인 버튼"
                />
            </a>
        </div>
    )
}

export default KakaLogin;