import React from 'react';
import styled from "styled-components";
import {Logo} from "../../components/logo/Logo";
import {FlexWrapper} from "../../components/FlexWrapper";
import {Social} from "../../components/social/Social";
import {Menu} from "../../components/menu/Menu";
import {Container} from "../../components/Container";

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
                            <Social section={'footer'}/>
                        </FlexWrapper>

                    </FlexWrapper>
                </FooterTop>
                <FooterBottom>
                    <FlexWrapper justify={'space-between'} align={'center'}>
                        <Menu menuItems={menuItems}/>
                        <Text>Designed and built by <span>Arslanbek Astemirov</span></Text>
                    </FlexWrapper>
                </FooterBottom>
            </Container>
        </StyledFooter>
    );
};

const StyledFooter = styled.footer`

`

const FooterTop = styled.div`
  border-bottom: 3px solid #b4b4b4;
  padding: 40px 0;
`

const FooterBottom = styled.div`
  padding: 45px 0;
`
const Phone = styled.a`

`

const Email = styled.a`

`

const Text = styled.p`
  color: var(--dark-content, #666);
  text-align: center;
  font-size: 18px;
  font-style: normal;
  font-weight: 400;
  line-height: 26px;
  
  span {
    background: var(--gradient-heading, linear-gradient(90deg, #13B0F5 2.60%, #E70FAA 100%));
    background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }
`