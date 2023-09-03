import React from 'react';
import {Menu} from "./Menu";
import {S} from './Menu_Styles'

type DesktopMenuPropsType = {
    menuItems: Array<string>,
    fontColor?: string,
    hoverColor?: string,
    fontSize?: string,
    fontWeight?: string
}

export const DesktopMenu: React.FC<DesktopMenuPropsType> = (props: DesktopMenuPropsType) => {
    return (
        <S.DesktopMenu>
            <Menu menuItems={props.menuItems}
                  fontColor={props.fontColor}
                  hoverColor={props.hoverColor}
                  fontSize={props.fontSize}
                  fontWeight={props.fontWeight}/>
        </S.DesktopMenu>
    );
};

