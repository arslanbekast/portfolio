import React from 'react';
import styled from "styled-components";
import {Logo} from "../../components/logo/Logo";
import {DesktopMenu} from "../../components/menu/DesktopMenu";
import {Social} from "../../components/social/Social";
import {FlexWrapper} from "../../components/FlexWrapper";
import {Container} from "../../components/Container";
import {MobileMenu} from "../../components/menu/MobileMenu";
import {S} from './Header_Styles'

const menuItems = ['Home', 'Tech Stack', 'Projects', 'Contact']

export const Header: React.FC = () => {
    return (
        <S.Header>
            <Container>
                <FlexWrapper justify={'space-between'} align={'center'}>
                    <Logo section={'header'}/>
                    <FlexWrapper justify={'flex-end'} align={'center'} columnGap={'50px'}>
                        <DesktopMenu menuItems={menuItems}/>
                        <Social/>
                        <MobileMenu menuItems={menuItems}/>
                    </FlexWrapper>
                </FlexWrapper>
            </Container>
        </S.Header>
    );
};

