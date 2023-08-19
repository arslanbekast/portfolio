import React from 'react';
import styled from "styled-components";
import {Icon} from "../icon/Icon";

type SocialPropsType = {
    section?: string
}

export const Social = (props: SocialPropsType) => {
    return (
        <StyledSocial>
            <li>
                <a href="">
                    <Icon iconId={props.section==='footer' ? 'footersocgithub' : 'socgithub'} width={'32'} height={'32'} />
                </a>
            </li>
            <li>
                <a href="">
                    <Icon iconId={props.section==='footer' ? 'footertwitter' : 'twitter'} width={'32'} height={'32'} />
                </a>
            </li>
            <li>
                <a href="">
                    <Icon iconId={props.section==='footer' ? 'footerlinkedin' : 'linkedin'} width={'32'} height={'32'} />
                </a>
            </li>
        </StyledSocial>
    );
};

const StyledSocial = styled.ul`
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
  }
  path {
    fill: #42446E;
  }
  
`