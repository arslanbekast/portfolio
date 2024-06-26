import React, {useEffect, useState} from 'react';
import {Logo} from "../../components/logo/Logo";
import {DesktopMenu} from "../../components/menu/DesktopMenu";
import {Social} from "../../components/social/Social";
import {FlexWrapper} from "../../components/FlexWrapper";
import {Container} from "../../components/Container";
import {MobileMenu} from "../../components/menu/MobileMenu";
import {S} from './Header_Styles'

export const Header: React.FC = () => {

    const [width, setWidth] = useState(window.innerWidth);
    const breakpoint = 768;

    useEffect(() => {
        const handleWindowResize = () => setWidth(window.innerWidth);
        window.addEventListener("resize", handleWindowResize);
        return () => window.removeEventListener("resize", handleWindowResize);
    }, [])

    return (
        <S.Header>
            <Container>
                <FlexWrapper justify={'space-between'} align={'center'}>
                    <Logo />
                    <FlexWrapper justify={'flex-end'} align={'center'} columnGap={'50px'}>
                        {width > breakpoint ? <DesktopMenu /> :
                                              <MobileMenu />}
                        <Social/>
                    </FlexWrapper>
                </FlexWrapper>
            </Container>
        </S.Header>
    );
};

