import React from 'react';
import styled from "styled-components";
import {theme} from "../../styles/Theme";
import {Menu} from "./Menu";

type DesktopMenuPropsType = {
    menuItems: Array<string>,
    fontColor?: string,
    hoverColor?: string,
    fontSize?: string,
    fontWeight?: string
}

export const DesktopMenu: React.FC<DesktopMenuPropsType> = (props: DesktopMenuPropsType) => {
    return (
        <StyledDesktopMenu>
            <Menu menuItems={props.menuItems}
                  fontColor={props.fontColor}
                  hoverColor={props.hoverColor}
                  fontSize={props.fontSize}
                  fontWeight={props.fontWeight}/>
        </StyledDesktopMenu>
    );
};

const StyledDesktopMenu = styled.nav`
  @media ${theme.media.mobile} {
    display: none;
  }
`