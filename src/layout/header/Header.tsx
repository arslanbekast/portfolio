import React from 'react';
import styled from "styled-components";
import {Logo} from "../../components/logo/Logo";
import {Menu} from "../../components/menu/Menu";
import {Social} from "../../components/social/Social";
import {FlexWrapper} from "../../components/FlexWrapper";
import {Container} from "../../components/Container";

const menuItems = ['Home', 'Tech Stack', 'Projects', 'Contact']

export const Header = () => {
    return (
        <StyledHeader>
            <Container>
                <FlexWrapper justify={'space-between'}>
                    <Logo section={'header'}/>
                    <FlexWrapper justify={'flex-end'} align={'flex-start'}>
                        <Menu menuItems={menuItems}/>
                        <Social/>
                    </FlexWrapper>
                </FlexWrapper>
            </Container>
        </StyledHeader>
    );
};

const StyledHeader = styled.header`
  background-color: #d4ffd3;
`