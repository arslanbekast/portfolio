import styled from "styled-components";
import {theme} from "../../styles/Theme";

type SocialPropsType = {
    color?: string,
    hoverColor?: string,
    display?: string
}

const Social = styled.ul<SocialPropsType>`
  display: flex;
  list-style-type: none;
  gap: 20px;
  margin: 0;
  
  li {
    width: 30px;
    height: 30px;
  }
  
  a {
    display: inline-block;
    color: ${props=>props.color || theme.colors.grey};
    transition: .2s;
    
    &:hover {
      color: ${props=>props.hoverColor || theme.colors.matteBlue};
    }
  }
  
  @media ${theme.media.tablet} {
    display: ${props=>props.display || "none"};
  }
`

export const S = {
    Social
}