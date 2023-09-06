import React from 'react';
import {S} from './Menu_Styles'

type MenuPropsType = {
    fontColor?: string,
    hoverColor?: string,
    fontSize?: string,
    fontWeight?: string
}

const menuItems = ['Home', 'Tech Stack', 'Projects', 'Contact']

export const Menu: React.FC<MenuPropsType> = (props:MenuPropsType) => {
    return (
        <S.MenuList role={'menu'} aria-label={'Меню'}
                  fontColor={props.fontColor}
                  hoverColor={props.hoverColor}
                  fontSize={props.fontSize}
                  fontWeight={props.fontWeight}>
            {menuItems.map((item, i)=>{
                return <li key={i} role={'menuitem'}><a href="#">{item}</a></li>
            })}
        </S.MenuList>
    );
};
