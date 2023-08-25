import React from 'react';
import styled from "styled-components";
import {Logo} from "../../components/logo/Logo";
import {FlexWrapper} from "../../components/FlexWrapper";
import {Social} from "../../components/social/Social";
import {Menu} from "../../components/menu/Menu";
import {Container} from "../../components/Container";
import {theme} from "../../styles/Theme";

const menuItems = ['Home', 'Tech Stack', 'Projects', 'Contact']

export const Footer = () => {
    return (
        <StyledFooter>
            <Container>
                <FooterTop>
                    <FlexWrapper justify={'space-between'} align={'center'}>
                        <Logo section={'footer'}/>
                        <FlexWrapper justify={'space-between'} align={'center'} columnGap={'63px'}>
                            <Phone href={'tel:+79323161334'}>+7(932)316-13-34</Phone>
                            <Email href={'mailto:astemirow@mail.ru'}>astemirow@mail.ru</Email>
                            <Social color={theme.colors.matteBlue} hoverColor={theme.colors.grey}/>
                        </FlexWrapper>

                    </FlexWrapper>
                </FooterTop>
                <FooterBottom>
                    <FlexWrapper justify={'space-between'} align={'center'}>
                        <Menu menuItems={menuItems}
                              fontColor={theme.colors.matteBlue}
                              hoverColor={theme.colors.grey}
                              fontSize={"18px"}
                              fontWeight={"400"}/>
                        <Text>Designed and built by <span>Arslanbek Astemirov</span></Text>
                    </FlexWrapper>
                </FooterBottom>
            </Container>
        </StyledFooter>
    );
};

const StyledFooter = styled.footer`
  padding-top: 100px;
  color: ${theme.colors.matteBlue};
  font-family: DM Sans;
  font-size: 18px;
  font-weight: 400;
  line-height: 26px;
`

const FooterTop = styled.div`
  border-bottom: 3px solid #66666633;
  padding: 40px 0;
  
  a {
    color: ${theme.colors.matteBlue};
    transition: .2s;
    
    &:hover {
      color: ${theme.colors.grey};
    }
  }
`

const FooterBottom = styled.div`
  padding: 45px 0;
`
const Phone = styled.a`
  
`

const Email = styled.a`
  
`

const Text = styled.p`
  
  span {
    background: var(--gradient-heading, linear-gradient(90deg, #13B0F5 2.60%, #E70FAA 100%));
    background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }
`