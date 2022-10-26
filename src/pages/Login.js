import React, {useState} from 'react';
import './Login.css';
import Cup from "../img/cup.png";
import {Link, useNavigate} from "react-router-dom";

const Login = () => {
    let realp = '1234';
    let realemail = '202110407@bssm.hs.kr';
    const nav = useNavigate();
    let [email, setEmail] = useState('');
    let [pw, setPw] = useState('');
    const handlelogin = () => {
        if(pw == realp && email == realemail){
            alert('로그인에 성공하셨습니다.');
            nav('/');
        }
        else
            alert('로그인에 실패했습니다.\n아이디/비밀번호를 확인해주세요.');
    }
    const entercheck = (e) => {
        if(e.key == 'Enter'){
            handlelogin();
        }
    }
    return (
        <div className="background">
            <img className='cup' src={Cup}/>
            <div className="title">
                <text>Welcome to PIKU</text>
            </div>
            <br/>
            <div className="say">
                <text>이상형 월드컵을 만들고 공유하려면 로그인이 필요합니다.</text>
                <br />
                <br />
                <text>이메일 주소만으로 간단히 계정 생성이 가능합니다.</text>
            </div>
            <br />
            <div className="put">
                <div className="email">
                    <input
                        placeholder="이메일"
                        id="id"
                        className="ilogin"
                        onChange={(e) => {
                            setEmail(e.target.value);
                        }}
                    />
                </div>
                <div className="password">
                    <input
                        type="password"
                        placeholder="비밀번호"
                        id="password"
                        className="ilogin"
                        onChange={(e) => {
                            setPw(e.target.value);
                        }}
                        onKeyPress={entercheck}
                    />
                </div>
                <Link to = "/Logined">
                    <button className="loginbn" onClick={handlelogin}>
                        <text>로그인</text>
                    </button>
                </Link>
                <br />
                <Link to = "/Signup">
                    <button className="account">
                        <text>계정 생성</text>
                    </button>
                </Link>
            </div>
        </div>
    );
}

export default Login;
