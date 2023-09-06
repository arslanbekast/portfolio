import styled, {css} from "styled-components";
import {theme} from "../../styles/Theme";
import {Link} from "react-scroll";

// Menu
type MenuLinkPropsType = {
    fontColor?: string,
    hoverColor?: string,
    fontSize?: string,
    fontWeight?: string
}

const MenuList = styled.ul`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  gap: 50px;

  @media ${theme.media.mobile} {
    flex-direction: column;
    gap: 5px;
  }
`

const MenuLink = styled(Link)<MenuLinkPropsType>`
  color: ${props => props.fontColor || theme.colors.grey};
  font-family: DM Sans;
  font-size: ${props => props.fontSize || "20px"};
  font-weight: ${props => props.fontWeight || "500"};
  line-height: 26px;
  transition: .2s;
  cursor: pointer;

  &:hover, &.active {
    color: ${props => props.hoverColor || theme.colors.matteBlue};
  }
`
// Desktop menu
const DesktopMenu = styled.nav`
  
`

// Mobile menu
const MobileMenu = styled.nav`

`

const MobileMenuPopup = styled.div<{ isOpen: boolean }>`

  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 99999;
  background-color: rgba(31, 31, 31, 0.96);
  display: none;

  ${props => props.isOpen && css<{ isOpen: boolean }>`
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

      &:hover {
        color: ${theme.colors.matteBlue};
      }
    }
  }
`

const BurgerButton = styled.button<{ isOpen: boolean }>`
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

    ${props => props.isOpen && css<{ isOpen: boolean }>`
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

      ${props => props.isOpen && css<{ isOpen: boolean }>`
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
      transform: translate(12px, 10px);

      ${props => props.isOpen && css<{ isOpen: boolean }>`
        transform: rotate(45deg) translate(0);
        width: 36px;
        background-color: ${theme.colors.mobileMenu};
      `}
    }
  }
`

export const S = {
    MenuList,
    MenuLink,
    DesktopMenu,
    MobileMenu,
    MobileMenuPopup,
    BurgerButton
}