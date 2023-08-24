import React from 'react';
import styled from "styled-components";
import {theme} from "../../styles/Theme";

type MenuPropsType = {
    menuItems: Array<string>,
    fontColor?: string,
    fontSize?: string,
    fontWeight?: string
}

export const Menu = (props: MenuPropsType) => {
    return (
        <StyledMenu fontColor={props.fontColor}
                    fontSize={props.fontSize}
                    fontWeight={props.fontWeight}>
            <ul role={'menu'} aria-label={'Меню'}>
                {props.menuItems.map((item, i)=>{
                    return <li key={i} role={'menuitem'}><a href="">{item}</a></li>
                })}
            </ul>
        </StyledMenu>
    );
};

type StyledMenuPropsType = {
    fontColor?: string,
    fontSize?: string,
    fontWeight?: string
}

const StyledMenu = styled.nav<StyledMenuPropsType>`
  ul {
    display: flex;
    justify-content: flex-start;
    align-items: center;
    gap: 50px;
    
    
    a {
      color: ${props => props.fontColor || theme.colors.grey};
      font-family: DM Sans;
      font-size: ${props => props.fontSize || "20px"};
      font-style: normal;
      font-weight: ${props => props.fontWeight || "500"};
      line-height: 26px;
    }
  }
`