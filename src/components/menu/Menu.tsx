import React from 'react';
import {S} from './Menu_Styles'

type MenuPropsType = {
    menuItems: Array<string>
    fontColor?: string,
    hoverColor?: string,
    fontSize?: string,
    fontWeight?: string
}

export const Menu: React.FC<MenuPropsType> = (props:MenuPropsType) => {
    return (
        <S.MenuList role={'menu'} aria-label={'Меню'}
                  fontColor={props.fontColor}
                  hoverColor={props.hoverColor}
                  fontSize={props.fontSize}
                  fontWeight={props.fontWeight}>
            {props.menuItems.map((item, i)=>{
                return <li key={i} role={'menuitem'}><a href="#">{item}</a></li>
            })}
        </S.MenuList>
    );
};
