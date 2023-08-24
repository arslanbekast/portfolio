import React from 'react';
import photo from '../../../assets/images/photo.jpeg'
import styled from "styled-components";
import {FlexWrapper} from "../../../components/FlexWrapper";
import {Container} from "../../../components/Container";
import {theme} from "../../../styles/Theme";

export const Main = () => {
    return (
        <StyledMain>
            <Container>
                <FlexWrapper justify={'space-between'} align={'center'} height={'100%'}>
                    <StyledMainText>
                        <span>Hi 👋,</span><br/>
                        <span>My name is</span><br/>
                        <StyledName>Arslanbek Astemirov</StyledName>
                        <StyledMainTitle>A Front-End Developer</StyledMainTitle>
                    </StyledMainText>
                    <StyledPhotoBox>
                        {/*<StyledPhoto src={photo} alt=""/>*/}
                    </StyledPhotoBox>

                </FlexWrapper>
            </Container>


        </StyledMain>
    );
};

const StyledMain = styled.div`
  min-height: 100vh;
  display: flex;
`

const StyledPhotoBox = styled.div`
  position: relative;
  width: 350px;
  height: 350px;
  background: url(${photo}) no-repeat center;
  background-size: cover;
  border-radius: 50%;
  
  &::before {
    content: "";
    position: absolute;
    top: -8px;
    bottom: -8px;
    left: -8px;
    right: -8px;
    background: linear-gradient(to bottom, #E70FAA, #00C0FD);
    border-radius: 50%;
    z-index: -1;
  }
`

const StyledPhoto = styled.img`
  width: 100%;
  object-fit: cover;
`
const StyledMainText = styled.div`
  color: ${theme.colors.matteBlue};
  font-size: 58px;
  font-weight: 700;
  line-height: 70px;
  letter-spacing: -1px;
`
const StyledMainTitle = styled.h1`
  font-size: 58px;
`

const StyledName = styled.span`
  background: linear-gradient(90deg, #13B0F5 2.60%, #E70FAA 100%);
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`