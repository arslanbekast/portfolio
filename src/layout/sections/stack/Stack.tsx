import React from 'react';
import {Icon} from "../../../components/icon/Icon";
import {SectionTitle} from "../../../components/SectionTitle";
import {SectionText} from "../../../components/SectionText";
import {Container} from "../../../components/Container";
import {S} from './Stack_Styles';
import {Bounce} from "react-awesome-reveal";
import {StackItem} from "./StackItem/StackItem";

const techStackArr = [
    {name:'HTML',icon:'html',width:'120',height:'120'},
    {name:'CSS',icon:'css',width:'120',height:'120'},
    {name:'SASS',icon:'sass',width:'117',height:'87'},
    {name:'JavaScript',icon:'js',width:'120',height:'120'},
    {name:'TypeScript',icon:'ts',width:'120',height:'120'},
    {name:'React',icon:'react',width:'113',height:'101'},
    {name:'Redux',icon:'redux',width:'105',height:'100'},
    {name:'Redux Thunk',icon:'redux',width:'105',height:'100'},
    {name:'Redux Saga',icon:'redux',width:'105',height:'100'},
    {name:'Redux Toolkit',icon:'redux',width:'105',height:'100'},
    {name:'RTK Query',icon:'redux',width:'105',height:'100'},
    {name:'React Router',icon:'rr',width:'120',height:'120'},
    {name:'React Hook Form',icon:'rhf',width:'120',height:'120'},
    {name:'Formik',icon:'formik',width:'120',height:'120'},
    {name:'Storybook',icon:'storybook',width:'120',height:'120'},
    {name:'Postman',icon:'postman',width:'120',height:'120'},
    {name:'Axios',icon:'axios',width:'120',height:'120'},
    {name:'REST API',icon:'rest',width:'120',height:'120'},
    {name:'Styled Components',icon:'styledComponents',width:'120',height:'120'},
    {name:'Material UI',icon:'mui',width:'120',height:'120'},
    {name:'Unit Testing',icon:'unit',width:'120',height:'120'},
    {name:'Git',icon:'git',width:'105',height:'105'},
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

