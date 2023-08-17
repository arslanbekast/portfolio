import React from 'react';
import styled from "styled-components";
import {Logo} from "../../components/logo/Logo";
import {Menu} from "../../components/menu/Menu";
import {Social} from "../../components/social/Social";

export const Header = () => {
    return (
        <StyledHeader>
            <Logo/>
            <StyledMenuSocialBox>
                <Menu/>
                <Social/>
            </StyledMenuSocialBox>

        </StyledHeader>
    );
};

const StyledHeader = styled.header`
  background-color: #d4ffd3;
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
`

const StyledMenuSocialBox = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
`