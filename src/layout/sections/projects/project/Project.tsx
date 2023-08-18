import React from 'react';
import styled from "styled-components";
import {Icon} from "../../../../components/icon/Icon";
import {FlexWrapper} from "../../../../components/FlexWrapper";

type ProjectPropsType = {
    title: string,
    text: string,
    imgSrc: string,
    techStack: string
}


export const Project = (props: ProjectPropsType) => {
    return (
        <StyledProject>
            <Image src={props.imgSrc} alt=""/>
            <Title>{props.title}</Title>
            <Text>{props.text}</Text>
            <StackString>Tech stack : {props.techStack}</StackString>
            <FlexWrapper columnGap={'50px'}>
                <Link href={"#"}>
                    <FlexWrapper align={'center'} columnGap={'10px'}>
                        <Icon iconId={'link'} width={'20'} height={'20'} />
                        <span>Live Preview</span>
                    </FlexWrapper>
                </Link>
                <Link href={"#"}>
                    <FlexWrapper align={'center'} columnGap={'10px'}>
                        <Icon iconId={'projgithub'} width={'20'} height={'20'} />
                        <span>View Code</span>
                    </FlexWrapper>
                </Link>
            </FlexWrapper>
        </StyledProject>
    );
};

const StyledProject = styled.div`
  background-color: #fff;
  width: 100%;
  max-width: 375px;
`

const Image = styled.img`
  width: 100%;
  height: 260px;
  object-fit: cover;
`

const Title = styled.h3`
  color: #000;
  text-align: center;
  font-size: 28px;
  font-style: normal;
  font-weight: 500;
  line-height: 26px;
`

const Text = styled.p`
  color: var(--dark-content, #666);
  font-size: 18px;
  font-style: normal;
  font-weight: 300;
  line-height: 26px;
`

const StackString = styled.p`
  color: var(--solid-heading, #42446E);
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 26px;
`

const Link = styled.a`
  color: #000;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 26px;
  text-decoration-line: underline;
`