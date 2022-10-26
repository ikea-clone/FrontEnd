import React from 'react';
import './header.css';
import Logo from '../img/logo.png';
import { Link } from "react-router-dom";

const logined_header = () => {
    return (
        <div className="header">
            <Link to="/">
                <img className='logo' src={Logo} />
            </Link>
            <text className='worldcup' >이상형 월드컵</text>
            <text className='make'>이상형 월드컵 만들기</text>
            <Link to="/Login">
                <text className='login'>Logout</text>
            </Link>
        </div>
    );
}

export default logined_header;
