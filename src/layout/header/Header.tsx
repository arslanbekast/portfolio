import React from 'react';
import styled from "styled-components";
import {Logo} from "../../components/logo/Logo";
import {Menu} from "../../components/menu/Menu";
import {Social} from "../../components/social/Social";
import {FlexWrapper} from "../../components/FlexWrapper";

const menuItems = ['Home', 'Tech Stack', 'Projects', 'Contact']

export const Header = () => {
    return (
        <StyledHeader>
            <FlexWrapper justify={'space-between'}>
                <Logo/>
                <FlexWrapper justify={'flex-end'} align={'flex-start'}>
                    <Menu menuItems={menuItems}/>
                    <Social/>
                </FlexWrapper>
            </FlexWrapper>

        </StyledHeader>
    );
};

const StyledHeader = styled.header`
  background-color: #d4ffd3;
`