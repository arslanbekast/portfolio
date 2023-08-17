import React from 'react';
import styled from "styled-components";
import {Icon} from "../icon/Icon";

export const Social = () => {
    return (
        <StyledSocial>
            <li>
                <a href="">
                    <Icon iconId={'socgithub'} width={'32'} height={'32'} />
                </a>
            </li>
            <li>
                <a href="">
                    <Icon iconId={'twitter'} width={'32'} height={'32'} />
                </a>
            </li>
            <li>
                <a href="">
                    <Icon iconId={'linkedin'} width={'32'} height={'32'} />
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
  
  a {
    display: inline-block;
  }
`