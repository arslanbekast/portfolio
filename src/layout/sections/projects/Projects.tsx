import React from 'react';
import {SectionTitle} from "../../../components/SectionTitle";
import {SectionText} from "../../../components/SectionText";
import {FlexWrapper} from "../../../components/FlexWrapper";
import {Project} from "./project/Project";
import todo from '../../../assets/images/projects/todo.jpeg'
import socialNetwork from '../../../assets/images/projects/social_network.jpeg'
import cards from '../../../assets/images/projects/cards.jpeg'
import {Container} from "../../../components/Container";
import {S} from './Projects_Styles'
import {Zoom} from "react-awesome-reveal";

const projectsArr = [
    {
        img:cards,
        title:'Cards',
        text:'The app is designed for question-and-answer card-based learning, with the ability to create your own decks of cards or use existing sets.',
        techStack:'HTML, Module SCSS, TypeScript, React, RTK Query, React Router Dom, Radix UI, React Hook Form',
        linkPreview: 'https://cards-for-study.vercel.app/',
        linkCode: 'https://github.com/MrEvgeniy1989/cards'
    },
    {
        img:todo,
        title:'Todolist',text:'The project provides convenient management of tasks and to-do lists through an intuitive interface, allowing you to create, edit, delete and view tasks and to-do lists.',
        techStack:'HTML, Module CSS, TypeScript, React, Redux Toolkit, React Router Dom, Material UI, Formik',
        linkPreview: 'https://arslanbekast.github.io/todolist/',
        linkCode: 'https://github.com/arslanbekast/todolist'
    },
    {
        img:socialNetwork,
        title:'Social Network',
        text:'The project is a platform where users can register, create personal profiles, view other users\' profiles, add them as friends and chat.',
        techStack:'HTML, Module CSS, TypeScript, React, Redux, Redux Thunk, React Router Dom, Redux Form',
        linkPreview: 'https://arslanbekast.github.io/social-network/',
        linkCode: 'https://github.com/arslanbekast/social-network'
    }
]

export const Projects: React.FC = () => {
    return (
        <S.Projects id={"projects"}>
            <Container>
                <SectionTitle>Projects</SectionTitle>
                <SectionText>Things I’ve built so far</SectionText>
                <FlexWrapper justify={'center'} wrap={'wrap'} rowGap={'62px'} columnGap={'19px'}>
                    <Zoom cascade={true} damping={0.05}>
                    {
                        projectsArr.map((item,i)=>{
                            const {img,title,text,techStack, linkPreview, linkCode} = item;
                            return (
                                <Project
                                    key={i}
                                    imgSrc={img}
                                    title={title}
                                    text={text}
                                    techStack={techStack}
                                    linkPreview={linkPreview}
                                    linkCode={linkCode}
                                />
                            )
                        })
                    }
                    </Zoom>
                </FlexWrapper>
            </Container>
        </S.Projects>
    );
};

