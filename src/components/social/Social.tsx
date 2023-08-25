import React from 'react';
import styled from "styled-components";
import {Icon} from "../icon/Icon";
import {theme} from "../../styles/Theme";

type SocialPropsType = {
    color?: string
}

export const Social = (props: SocialPropsType) => {
    return (
        <StyledSocial color={props.color}>
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
    color?: string
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
  }
`