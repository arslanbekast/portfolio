import React from 'react';

type MenuPropsType = {
    menuItems: Array<string>
}

export const Menu: React.FC<MenuPropsType> = (props:MenuPropsType) => {
    return (
        <ul role={'menu'} aria-label={'Меню'}>
            {props.menuItems.map((item, i)=>{
                return <li key={i} role={'menuitem'}><a href="#">{item}</a></li>
            })}
        </ul>
    );
};
