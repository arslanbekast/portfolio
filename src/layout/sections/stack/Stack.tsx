import React from 'react';
import styled from "styled-components";
import {Icon} from "../../../components/icon/Icon";
import {SectionTitle} from "../../../components/SectionTitle";
import {SectionText} from "../../../components/SectionText";
import {Container} from "../../../components/Container";

const techStackArr = [
    {icon:'html',width:'120',height:'120'},
    {icon:'css',width:'120',height:'120'},
    {icon:'js',width:'120',height:'120'},
    {icon:'react',width:'113',height:'101'},
    {icon:'redux',width:'105',height:'100'},
    {icon:'bootstrap',width:'88',height:'87'},
    {icon:'tailwind',width:'131',height:'131'},
    {icon:'sass',width:'117',height:'87'},
    {icon:'git',width:'105',height:'105'},
    {icon:'greensock',width:'120',height:'120'},
    {icon:'vscode',width:'112',height:'112'},
    {icon:'github',width:'88',height:'88'},
]

export const Stack = () => {
    return (
        <StyledStack>
            <Container>
                <SectionTitle>My Tech Stack</SectionTitle>
                <SectionText>Technologies I’ve been working with recently</SectionText>
                {/*<FlexWrapper align={'center'} wrap={'wrap'} rowGap={'80px'} columnGap={'96px'}>*/}
                <GridWrapper>
                    {
                        techStackArr.map((item,i)=>{
                            const {icon, width, height} = item;
                            return (
                                <Icon key={i} iconId={icon} width={width} height={height} />
                            )
                        })
                    }
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
  @media screen and (max-width: 576px) {
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: repeat(6, 1fr);
  }
`