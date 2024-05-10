import React from "react";
import logo from '../../assets/images/logo.png'
import {animateScroll as scroll} from "react-scroll";

export const Logo: React.FC = () => {
    return (
        <a onClick={() => {scroll.scrollToTop()}} style={{cursor:'pointer'}}>
            <img src={logo} alt="logo"/>
        </a>
    );
};