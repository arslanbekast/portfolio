import React from 'react';
import styled from "styled-components";
import {Logo} from "../../components/logo/Logo";
import {FlexWrapper} from "../../components/FlexWrapper";
import {Social} from "../../components/social/Social";
import {DesktopMenu} from "../../components/menu/DesktopMenu";
import {Container} from "../../components/Container";
import {theme} from "../../styles/Theme";

const menuItems = ['Home', 'Tech Stack', 'Projects', 'Contact']

export const Footer = () => {
    return (
        <StyledFooter>
            <Container>
                <FooterTop>
                    <FlexWrapper justify={'space-between'} align={'center'} wrap={'wrap'}>
                        <Logo section={'footer'}/>
                        <FlexWrapper justify={'space-between'} align={'center'} columnGap={'63px'}>
                            <Phone href={'tel:+79323161334'}>+7(932)316-13-34</Phone>
                            <Email href={'mailto:astemirow@mail.ru'}>astemirow@mail.ru</Email>
                            <Social color={theme.colors.matteBlue} hoverColor={theme.colors.grey} display={'flex'}/>
                        </FlexWrapper>

                    </FlexWrapper>
                </FooterTop>
                <FooterBottom>
                    <FlexWrapper justify={'space-between'} align={'center'} wrap={'wrap'}>
                        <DesktopMenu menuItems={menuItems}
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
  
  ${FlexWrapper} {
    @media screen and (max-width: 688px) {
      justify-content: center;
      flex-direction: column;
      row-gap: 20px;
    }
  }
`

const FooterBottom = styled.div`
  padding: 45px 0;

  ${FlexWrapper} {
    @media screen and (max-width: 850px) {
      flex-direction: column;
      justify-content: center;
      row-gap: 20px;
    }
  }
  
`
const Phone = styled.a`
  
`

const Email = styled.a`
  
`

const Text = styled.p`
  
  span {
    white-space: nowrap;
    background: var(--gradient-heading, linear-gradient(90deg, #13B0F5 2.60%, #E70FAA 100%));
    background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }

  @media ${theme.media.tablet} {
    text-align: center;
  }
`