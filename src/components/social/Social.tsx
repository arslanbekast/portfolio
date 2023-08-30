import React from 'react';
import styled from "styled-components";
import {Icon} from "../icon/Icon";
import {theme} from "../../styles/Theme";

type SocialPropsType = {
    color?: string,
    hoverColor?: string,
    display?: string
}

export const Social = (props: SocialPropsType) => {
    return (
        <StyledSocial color={props.color} hoverColor={props.hoverColor} display={props.display}>
            <li>
                <a href="">
                    <Icon iconId={'socgithub'} width={'30'} height={'30'} />
                </a>
            </li>
            <li>
                <a href="">
                    <Icon iconId={'twitter'} width={'31'} height={'31'} />
                </a>
            </li>
            <li>
                <a href="">
                    <Icon iconId={'linkedin'} width={'30'} height={'30'} />
                </a>
            </li>
        </StyledSocial>
    );
};

type StyledSocialPropsType = {
    color?: string,
    hoverColor?: string,
    display?: string
}

const StyledSocial = styled.ul<StyledSocialPropsType>`
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