import React from 'react';
import './Home.css';
import Swiper from '../component/swiper/Swiper'
import First from "../img/뷔:차은우.png";
import Second from "../img/장원영:안유진.png";
import Third from "../img/음식.png";
import Header from "../component/header";
import Middle from './Middle';
const Home = () => {
    return (
        <div>
            <Header />
            <Middle />
        </div>

    );
}

export default Home;
