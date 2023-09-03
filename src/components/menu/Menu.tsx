import React from 'react';
import styled from "styled-components";
import {theme} from "../../styles/Theme";

type MenuPropsType = {
    menuItems: Array<string>
    fontColor?: string,
    hoverColor?: string,
    fontSize?: string,
    fontWeight?: string
}

export const Menu: React.FC<MenuPropsType> = (props:MenuPropsType) => {
    return (
        <MenuList role={'menu'} aria-label={'Меню'}
                  fontColor={props.fontColor}
                  hoverColor={props.hoverColor}
                  fontSize={props.fontSize}
                  fontWeight={props.fontWeight}>
            {props.menuItems.map((item, i)=>{
                return <li key={i} role={'menuitem'}><a href="#">{item}</a></li>
            })}
        </MenuList>
    );
};

type MenuListPropsType = {
    fontColor?: string,
    hoverColor?: string,
    fontSize?: string,
    fontWeight?: string
}

const MenuList = styled.ul<MenuListPropsType>`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  gap: 50px;

  @media ${theme.media.mobile} {
    flex-direction: column;
    gap: 5px;
  }
  
  a {
      color: ${props => props.fontColor || theme.colors.grey};
      font-family: DM Sans;
      font-size: ${props => props.fontSize || "20px"};
      font-weight: ${props => props.fontWeight || "500"};
      line-height: 26px;
      transition: .2s;
      
      &:hover {
        color: ${props => props.hoverColor || theme.colors.matteBlue};
      }
    }
`
