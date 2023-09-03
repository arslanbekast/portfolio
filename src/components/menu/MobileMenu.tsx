import React, {useState} from 'react';
import {theme} from "../../styles/Theme";
import {Social} from "../social/Social";
import {Menu} from "./Menu";
import {S} from './Menu_Styles';

type MobileMenuPropsType = {
    menuItems: Array<string>
}

export const MobileMenu: React.FC<MobileMenuPropsType> = (props: MobileMenuPropsType) => {
    const [menuOpen, setMenuOpen] = useState(false)

    const onOpenedMenu = () => {
        menuOpen ? setMenuOpen(false) : setMenuOpen(true)
    }
    console.log(menuOpen)
    return (
        <S.MobileMenu>
            <S.BurgerButton isOpen={menuOpen} onClick={onOpenedMenu}>
                <span></span>
            </S.BurgerButton>

            <S.MobileMenuPopup isOpen={menuOpen}>
                <Menu menuItems={props.menuItems}/>
                <Social display={'flex'} color={theme.colors.mobileMenu}/>
            </S.MobileMenuPopup>
        </S.MobileMenu>
    );
};