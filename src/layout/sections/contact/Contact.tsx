import React from 'react';
import styled from "styled-components";
import {Container} from "../../../components/Container";
import {theme} from "../../../styles/Theme";

export const Contact = () => {
    return (
        <StyledContact>
            <Container>
                <Title>For any questions please mail me:</Title>
                <Email href={"#"}>astemirow@mail.ru</Email>
            </Container>
        </StyledContact>
    );
};

const StyledContact = styled.section`
  text-align: center;
  font-family: DM Sans;
  font-size: 58px;
  font-weight: 700;
  line-height: 70px;
  letter-spacing: -1px;
`

const Title = styled.h2`
  color: ${theme.colors.navyBlue};
  font-size: 58px;
`

const Email = styled.a`
  background: var(--gradient-heading, linear-gradient(90deg, #13B0F5 2.60%, #E70FAA 100%));
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`