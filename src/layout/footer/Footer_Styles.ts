import styled from "styled-components";
import {theme} from "../../styles/Theme";
import {FlexWrapper} from "../../components/FlexWrapper";

const Footer = styled.footer`
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

export const S = {
    Footer,
    FooterTop,
    FooterBottom,
    Text
}