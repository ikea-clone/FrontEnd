import React, {useState} from 'react';
import './Signup.css';
import Cup from "../img/cup.png";

const Signup = () => {
    const [Nickname, setNickname] = useState('');
    let [Email, setEmail] = useState('');
    let [Password, setPassword] = useState('');

    const onNicknameHandler = (event) => {
        setNickname(event.currentTarget.value);
    }

    const onEmailHandler = (event) => {
        setEmail(event.currentTarget.value);
    }

    const onPasswordHandler = (event) => {
        setPassword(event.currentTarget.value);
    }

    return (
        <div className='sign'>
            <div className="signin">
                <input
                    placeholder="닉네임"
                    id="na"
                    className="sname"
                    onChange={onNicknameHandler}
                />
                <br/>
                <input
                    placeholder="이메일"
                    id="id"
                    className="semail"
                    onChange={onEmailHandler}
                />
                <br/>
                <input
                    type="password"
                    placeholder="비밀번호"
                    id="pw"
                    className="spassword"
                    onChange={onPasswordHandler}
                />
                <br/>
                <button className="sibutton">회원가입</button>
            </div>
        </div>
    );
}

export default Signup;
