import React from "react";
import logo from '../../assets/images/logo.svg'
import {Icon} from "../icon/Icon";

type LogoPropsType = {
    section: string
}

export const Logo = (props: LogoPropsType) => {
    return (
        <a href="#">
            {
                props.section === 'header' ?
                    <img src={logo} alt="logo"/> :
                    <Icon iconId={'footerLogo'} width={'97'} height={'59'}/>
            }

        </a>
    );
};