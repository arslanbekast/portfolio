import React from 'react';
import {Icon} from "../../../components/icon/Icon";
import {SectionTitle} from "../../../components/SectionTitle";
import {SectionText} from "../../../components/SectionText";
import {Container} from "../../../components/Container";
import {S} from './Stack_Styles'

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

export const Stack: React.FC = () => {
    return (
        <S.Stack>
            <Container>
                <SectionTitle>My Tech Stack</SectionTitle>
                <SectionText>Technologies I’ve been working with recently</SectionText>
                <S.GridWrapper>
                    {
                        techStackArr.map((item,i)=>{
                            const {icon, width, height} = item;
                            return (
                                <Icon key={i} iconId={icon} width={width} height={height} />
                            )
                        })
                    }
                </S.GridWrapper>
            </Container>
        </S.Stack>
    );
};

