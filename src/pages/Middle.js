import React from 'react';
import './Home.css';
import Swiper from '../component/swiper/Swiper'
import First from "../img/뷔:차은우.png";
import Second from "../img/장원영:안유진.png";
import Third from "../img/음식.png";
const Middle = () => {
    return (
        <div>
            <div className="background">
                <Swiper/>
                <div className="box">
                    <img className="picture" src={First}/>
                    <text className="title">남자아이돌 이상형 월드컵</text>
                    <button className="start">시작하기</button>
                </div>
                <div className="box">
                    <img className="picture" src={Second}/>
                    <text className="title">여자아이돌 이상형 월드컵</text>
                    <button className="start">시작하기</button>
                </div>
                <div className="box">
                    <img className="picture" src={Third}/>
                    <text className="title">음식 월드컵</text>
                    <button className="start">시작하기</button>
                </div>
            </div>
        </div>

    );
}

export default Middle;
