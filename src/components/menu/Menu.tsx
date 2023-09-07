import React from 'react';
import {S} from './Menu_Styles';

type MenuPropsType = {
    fontColor?: string,
    hoverColor?: string,
    fontSize?: string,
    fontWeight?: string
}

const menuItems = [
    {title:'Home', href: 'home'},
    {title: 'Tech Stack', href: 'techStack'},
    {title: 'Projects', href: 'projects'},
    {title: 'Contact', href: 'contact'}
]

export const Menu: React.FC<MenuPropsType> = (props:MenuPropsType) => {
    return (
        <S.MenuList role={'menu'} aria-label={'Меню'}>
            {menuItems.map((item, i)=>{
                return (
                    <li key={i} role={'menuitem'}>
                        <S.MenuLink
                            fontColor={props.fontColor}
                            hoverColor={props.hoverColor}
                            fontSize={props.fontSize}
                            fontWeight={props.fontWeight}
                            to={item.href}
                            smooth={true}
                            activeClass="active"
                            spy={true}
                            offset={-10}>
                            {item.title}
                        </S.MenuLink>
                    </li>)
            })}
        </S.MenuList>
    );
};
