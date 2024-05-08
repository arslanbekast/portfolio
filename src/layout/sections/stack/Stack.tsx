import React from 'react';
import {Icon} from "../../../components/icon/Icon";
import {SectionTitle} from "../../../components/SectionTitle";
import {SectionText} from "../../../components/SectionText";
import {Container} from "../../../components/Container";
import {S} from './Stack_Styles';
import {Bounce} from "react-awesome-reveal";
import {FlexWrapper} from "../../../components/FlexWrapper";
import {StackItem} from "./StackItem/StackItem";

const techStackArr = [
    {name:'HTML',icon:'html',width:'120',height:'120'},
    {name:'CSS',icon:'css',width:'120',height:'120'},
    {name:'JS',icon:'js',width:'120',height:'120'},
    {name:'React',icon:'react',width:'113',height:'101'},
    {name:'Redux',icon:'redux',width:'105',height:'100'},
    {name:'Bootstrap',icon:'bootstrap',width:'88',height:'87'},
    {name:'Tailwind',icon:'tailwind',width:'131',height:'131'},
    {name:'SASS',icon:'sass',width:'117',height:'87'},
    {name:'Git',icon:'git',width:'105',height:'105'},
    {name:'GreenSock',icon:'greensock',width:'120',height:'120'},
    {name:'VSCode',icon:'vscode',width:'112',height:'112'},
    {name:'Github',icon:'github',width:'88',height:'88'},
]

export const Stack: React.FC = () => {
    return (

        <S.Stack id={"techStack"}>
            <Container>
                <SectionTitle>My Tech Stack</SectionTitle>
                <SectionText>Technologies I’ve been working with recently</SectionText>
                <S.GridWrapper>
                    <Bounce cascade={true} damping={0.05}>
                    {
                        techStackArr.map((item,i)=>{
                            const {name, icon, width, height} = item;
                            return (
                                <StackItem key={i} name={name} icon={icon} width={width} height={height} />
                            )
                        })
                    }
                    </Bounce>
                </S.GridWrapper>
            </Container>
        </S.Stack>

    );
};

