import React from 'react';
import styled from "styled-components";
import {Icon} from "../../../../components/icon/Icon";
import {FlexWrapper} from "../../../../components/FlexWrapper";
import {theme} from "../../../../styles/Theme";

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
            <ProjectTextBox>
                <Title>{props.title}</Title>
                <Text>{props.text}</Text>
                <StackString>Tech stack : <span>{props.techStack}</span></StackString>
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
            </ProjectTextBox>
        </StyledProject>
    );
};

const StyledProject = styled.div`
  background-color: #fff;
  width: 100%;
  max-width: 375px;
  border-radius: 20px;
  box-shadow: 2px 2px 100px 0px rgba(0, 0, 0, 0.20);
  overflow: hidden;
`

const Image = styled.img`
  width: 100%;
  height: 260px;
  object-fit: cover;
`

const ProjectTextBox = styled.div`
  padding: 25px 30px;
  line-height: 26px;
`

const Title = styled.h3`
  color: ${theme.colors.black};
  font-size: 28px;
  font-weight: 500;
  padding-bottom: 17px;
`

const Text = styled.p`
  color: ${theme.colors.grey};
  font-size: 18px;
  font-weight: 300;
  padding-bottom: 12px;
`

const StackString = styled.p`
  color: ${theme.colors.matteBlue};
  font-size: 16px;
  font-weight: 400;
  padding-bottom: 20px;
  
  span {
    font-size: 14px;
    font-weight: 300;
  }
`

const Link = styled.a`
  color: ${theme.colors.black};
  font-size: 16px;
  font-weight: 400;
  text-decoration-line: underline;
`