import React from 'react';
import {Logo} from "../../components/logo/Logo";
import {FlexWrapper} from "../../components/FlexWrapper";
import {Social} from "../../components/social/Social";
import {DesktopMenu} from "../../components/menu/DesktopMenu";
import {Container} from "../../components/Container";
import {theme} from "../../styles/Theme";
import {S} from './Footer_Styles'

export const Footer: React.FC = () => {
    return (
        <S.Footer>
            <Container>
                <S.FooterTop>
                    <FlexWrapper justify={'space-between'} align={'center'} wrap={'wrap'}>
                        <Logo section={'footer'}/>
                        <FlexWrapper justify={'space-between'} align={'center'} columnGap={'63px'}>
                            <a href={'tel:+79323161334'}>+7(932)316-13-34</a>
                            <a href={'mailto:astemirow@mail.ru'}>astemirow@mail.ru</a>
                            <Social color={theme.colors.matteBlue} hoverColor={theme.colors.grey} display={'flex'}/>
                        </FlexWrapper>

                    </FlexWrapper>
                </S.FooterTop>
                <S.FooterBottom>
                    <FlexWrapper justify={'space-between'} align={'center'} wrap={'wrap'}>
                        <DesktopMenu fontColor={theme.colors.matteBlue}
                                     hoverColor={theme.colors.grey}
                                     fontSize={"18px"}
                                     fontWeight={"400"}/>
                        <S.Text>Designed and built by <span>Arslanbek Astemirov</span></S.Text>
                    </FlexWrapper>
                </S.FooterBottom>
            </Container>
        </S.Footer>
    );
};

