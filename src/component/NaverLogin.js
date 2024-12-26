import { useEffect } from 'react'

const NaverLogin = () => {

    const { naver } = window

    const NAVER_CLIENT_ID = process.env.REACT_APP_Naver_CLIENT_ID
    const NAVER_CALLBACK_URL = process.env.REACT_APP_Naver_CALLBACK_URL

    const initializeNaverLogin = () => {
        const naverLogin = new naver.LoginWithNaverId({
            clientId: NAVER_CLIENT_ID,
            callbackUrl: NAVER_CALLBACK_URL,
            // 팝업창으로 로그인을 진행할 것인지?           
            isPopup: false,
            // 버튼 타입 ( 색상, 타입, 크기 변경 가능 )
            loginButton: { color: 'green', type: 3, height: 58 },
            callbackHandle: true,
        })
        naverLogin.init()
    }

    useEffect(() => {
        initializeNaverLogin()
    }, [])
    return(
        <>
            <div id="naverIdLogin" />
        </>
    )
}

export default NaverLogin;