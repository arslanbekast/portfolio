import React from 'react';
import {Icon} from "../../../../components/icon/Icon";
import {FlexWrapper} from "../../../../components/FlexWrapper";
import {S} from '../Projects_Styles'

type ProjectPropsType = {
    title: string,
    text: string,
    imgSrc: string,
    techStack: string,
    linkPreview: string,
    linkCode: string
}


export const Project: React.FC<ProjectPropsType> = (props: ProjectPropsType) => {
    return (
        <S.Project>
            <S.Image src={props.imgSrc} alt=""/>
            <S.ProjectTextBox>
                <S.Title>{props.title}</S.Title>
                <S.Text>{props.text}</S.Text>
                <S.StackString>Tech stack : <span>{props.techStack}</span></S.StackString>
                <FlexWrapper justify={'space-between'} align={'center'}>
                    <S.Link href={props.linkPreview} target='_blank'>
                        <FlexWrapper align={'center'} columnGap={'10px'}>
                            <Icon iconId={'link'} width={'20'} height={'20'} />
                            <span>Live Preview</span>
                        </FlexWrapper>
                    </S.Link>
                    <S.Link href={props.linkCode} target='_blank'>
                        <FlexWrapper align={'center'} columnGap={'10px'}>
                            <Icon iconId={'projgithub'} width={'20'} height={'20'} />
                            <span>View Code</span>
                        </FlexWrapper>
                    </S.Link>
                </FlexWrapper>
            </S.ProjectTextBox>
        </S.Project>
    );
};

