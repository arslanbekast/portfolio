import React from 'react';
import photo from '../../../assets/images/photo.jpeg'
import styled from "styled-components";
import {FlexWrapper} from "../../../components/FlexWrapper";

export const Main = () => {
    return (
        <StyledMain>
            <FlexWrapper justify={'space-between'} align={'center'}>
                    <StyledMainText>
                        <span>Hi 👋,</span><br/>
                        <span>My name is</span><br/>
                        <StyledName>Arslanbek Astemirov</StyledName>
                        <StyledMainTitle>A Front-End Developer</StyledMainTitle>
                    </StyledMainText>

                <StyledPhoto src={photo} alt=""/>
            </FlexWrapper>

        </StyledMain>
    );
};

const StyledMain = styled.div`
  min-height: 100vh;
  background-color: #fff5e7;
`

const StyledPhoto = styled.img`
  width: 350px;
  height: 350px;
  object-fit: cover;
  border: 5px solid #E70FAA;
  //border-image-slice: 1;
  //border-image-source: linear-gradient(to right, #E70FAA, #00C0FD);
  border-radius: 50%;
`
const StyledMainText = styled.div`
  color: #42446E;
  font-size: 58px;
  font-style: normal;
  font-weight: 700;
  line-height: 70px;
  letter-spacing: -1px;
`
const StyledMainTitle = styled.h1`
  font-size: 58px;
  margin: 0;
`

const StyledName = styled.span`
  background: var(--gradient-heading, linear-gradient(90deg, #13B0F5 2.60%, #E70FAA 100%));
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  //font-family: Poppins;
  font-size: 58px;
  font-style: normal;
  font-weight: 700;
  line-height: 70px;
  letter-spacing: -1px;
`