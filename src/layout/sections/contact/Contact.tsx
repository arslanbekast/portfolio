import React from 'react';
import styled from "styled-components";
import {Container} from "../../../components/Container";

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
  min-height: 50vh;
  background-color: #77f0ff;
  text-align: center;
`

const Title = styled.h2`
  color: var(--colors-heading, #1E0E62);
  //font-family: DM Sans;
  font-size: 58px;
  font-style: normal;
  font-weight: 700;
  line-height: 70px;
  letter-spacing: -1px;
`

const Email = styled.a`
  //font-family: DM Sans;
  font-size: 58px;
  font-style: normal;
  font-weight: 700;
  line-height: 70px;
  letter-spacing: -1px;
  background: var(--gradient-heading, linear-gradient(90deg, #13B0F5 2.60%, #E70FAA 100%));
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`