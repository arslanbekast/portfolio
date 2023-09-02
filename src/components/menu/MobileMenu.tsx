import React, {useState} from 'react';
import styled, {css} from "styled-components";
import {theme} from "../../styles/Theme";
import {Social} from "../social/Social";
import {logDOM} from "@testing-library/react";

type MobileMenuPropsType = {
    menuItems: Array<string>,
    fontColor?: string,
    hoverColor?: string,
    fontSize?: string,
    fontWeight?: string
}

export const MobileMenu = (props: MobileMenuPropsType) => {
    const [menuOpen, setMenuOpen] = useState(false)

    const onOpenedMenu = () => {
        menuOpen ? setMenuOpen(false) : setMenuOpen(true)
    }
    console.log(menuOpen)
    return (
        <StyledMobileMenu>

            <BurgerButton isOpen={menuOpen} onClick={onOpenedMenu}>
                <span></span>
            </BurgerButton>

            <MobileMenuPopup isOpen={menuOpen}>
                <ul role={'menu'} aria-label={'Меню'}>
                    {props.menuItems.map((item, i)=>{
                        return <li key={i} role={'menuitem'}><a href="#">{item}</a></li>
                    })}
                </ul>
                <Social display={'flex'} color={'#8287eb'}/>
            </MobileMenuPopup>
        </StyledMobileMenu>
    );
};

const StyledMobileMenu = styled.nav` 
    display: none;
    
    @media ${theme.media.tablet} {
      display: block;
    }
`

const MobileMenuPopup = styled.div<{isOpen: boolean}>`

  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 99999;
  background-color: rgba(31, 31, 31, 0.96);
  display: none;
  
  ${props => props.isOpen && css<{isOpen: boolean}>`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
  `}


    ul:first-child {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      gap: 30px;
      margin-bottom: 30px;
    
    
      a {
        color: ${theme.colors.mobileMenu};
        font-family: DM Sans;
        font-size: 20px;
        font-style: normal;
        font-weight: 500;
        line-height: 26px;
        transition: .2s;
    
        &:hover {
          color: ${theme.colors.matteBlue};
        }
      }
    }
`

const BurgerButton = styled.button<{isOpen: boolean}>`
  background-color: transparent;
  border: none;
  position: fixed;
  top: -100px;
  right: -100px;
  width: 200px;
  height: 200px;
  z-index: 999999;
  
  span {
    display: block;
    width: 36px;
    height: 2px;
    background-color: ${theme.colors.matteBlue};
    position: absolute;
    left: 40px;
    bottom: 50px;
    transition: .2s;

    ${props => props.isOpen && css<{isOpen: boolean}>`
      background-color: rgba(255, 255, 255, 0);
    `}
    
    &::before {
      content: "";
      display: block;
      width: 36px;
      height: 2px;
      background-color: ${theme.colors.matteBlue};
      position: absolute;
      transition: .2s;
      transform: translateY(-10px);

      ${props => props.isOpen && css<{isOpen: boolean}>`
        transform: rotate(-45deg) translateY(0);
        background-color: ${theme.colors.mobileMenu};
      `}
    }
    &::after {
      content: "";
      display: block;
      width: 24px;
      height: 2px;
      background-color: ${theme.colors.matteBlue};
      position: absolute;
      transition: .2s;
      transform: translate(12px,10px);

      ${props => props.isOpen && css<{isOpen: boolean}>`
        transform: rotate(45deg) translate(0);
        width: 36px;
        background-color: ${theme.colors.mobileMenu};
      `}
    }
  }
`