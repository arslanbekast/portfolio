import styled from "styled-components";
import {font} from "../../../styles/Common";
import {theme} from "../../../styles/Theme";

const Contact = styled.section`
  ${font({family:"DM Sans", weight: 700, color: theme.colors.navyBlue, lineHeight: "70px", Fmax: 58, Fmin: 32 })}
  text-align: center;
  letter-spacing: -1px;
  
  @media ${theme.media.mobile} {
    line-height: 50px;
  }
`

const Title = styled.h2`
  ${font({family:"DM Sans", weight: 700, color: theme.colors.navyBlue, lineHeight: "70px", Fmax: 58, Fmin: 32 })}

  @media ${theme.media.mobile} {
    line-height: 50px;
  }
`

const Email = styled.a`
  background: var(--gradient-heading, linear-gradient(90deg, #13B0F5 2.60%, #E70FAA 100%));
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`

export const S = {
    Contact,
    Title,
    Email
}