import React from "react";
import logo from '../../assets/images/logo.svg'
import {Icon} from "../icon/Icon";
import {animateScroll as scroll} from "react-scroll";

type LogoPropsType = {
    section: string
}

export const Logo: React.FC<LogoPropsType> = (props: LogoPropsType) => {
    return (
        <a onClick={() => {scroll.scrollToTop()}} style={{cursor:'pointer'}}>
            {
                props.section === 'header' ?
                    <img src={logo} alt="logo"/> :
                    <Icon iconId={'footerLogo'} width={'97'} height={'59'}/>
            }

        </a>
    );
};