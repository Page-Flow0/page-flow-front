import React, { useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';

const Test1 = () => {
    const [searchParams] = useSearchParams(); // URL의 쿼리 파라미터를 가져옴

    useEffect(() => {
        getData()
        const code = searchParams.get('code');
        const state = searchParams.get('state');

        if (code) {
            console.log('Authorization Code:', code);
            console.log('State:', state);
        } else {
            console.log('No Authorization Code found.');
        }
    }, [searchParams]);

    return (
        <div>
            <h1>네이버 로그인 리다이렉트 페이지</h1>
            <p>
                <strong>Authorization Code:</strong> {searchParams.get('code') || 'Not Found'}
            </p>
            <p>
                <strong>State:</strong> {searchParams.get('state') || 'Not Found'}
            </p>
        </div>
    );
};

export default Test1;
