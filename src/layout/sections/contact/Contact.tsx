import React from 'react';
import styled from "styled-components";
import {Container} from "../../../components/Container";
import {theme} from "../../../styles/Theme";
import {font} from "../../../styles/Common";

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
  ${font({family:"DM Sans", weight: 700, color: theme.colors.navyBlue, lineHeight: "70px", Fmax: 58, Fmin: 32 })}
  text-align: center;
  letter-spacing: -1px;
`

const Title = styled.h2`
  ${font({family:"DM Sans", weight: 700, color: theme.colors.navyBlue, lineHeight: "70px", Fmax: 58, Fmin: 32 })}
`

const Email = styled.a`
  background: var(--gradient-heading, linear-gradient(90deg, #13B0F5 2.60%, #E70FAA 100%));
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`