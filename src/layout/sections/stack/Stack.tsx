import React from 'react';
import styled from "styled-components";
import {FlexWrapper} from "../../../components/FlexWrapper";
import {Icon} from "../../../components/icon/Icon";
import {SectionTitle} from "../../../components/SectionTitle";
import {SectionText} from "../../../components/SectionText";
import {Container} from "../../../components/Container";

export const Stack = () => {
    return (
        <StyledStack>
            <Container>
                <SectionTitle>My Tech Stack</SectionTitle>
                <SectionText>Technologies I’ve been working with recently</SectionText>
                {/*<FlexWrapper align={'center'} wrap={'wrap'} rowGap={'80px'} columnGap={'96px'}>*/}
                <GridWrapper>
                    <Icon iconId={'html'} />
                    <Icon iconId={'css'} />
                    <Icon iconId={'js'} />
                    <Icon iconId={'react'} width={'113'} height={'101'} />
                    <Icon iconId={'redux'} width={'105'} height={'100'} />
                    <Icon iconId={'bootstrap'} width={'88'} height={'87'} />
                    <Icon iconId={'tailwind'} width={'131'} height={'131'} />
                    <Icon iconId={'sass'} width={'117'} height={'87'} />
                    <Icon iconId={'git'} width={'105'} height={'105'} />
                    <Icon iconId={'greensock'} />
                    <Icon iconId={'vscode'} width={'112'} height={'112'} />
                    <Icon iconId={'github'} width={'88'} height={'88'} />
                </GridWrapper>
                {/*</FlexWrapper>*/}
            </Container>
        </StyledStack>
    );
};

const StyledStack = styled.section`
  
`

const GridWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  grid-template-rows: repeat(2, 1fr);
  justify-items: center;
  align-items: center;
  justify-content: space-between;
  row-gap: 95px;
  
  @media screen and (max-width: 768px) {
    grid-template-columns: repeat(4, 1fr);
    grid-template-rows: repeat(3, 1fr);
  }
`