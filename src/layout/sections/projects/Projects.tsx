import React from 'react';
import {SectionTitle} from "../../../components/SectionTitle";
import {SectionText} from "../../../components/SectionText";
import {FlexWrapper} from "../../../components/FlexWrapper";
import {Project} from "./project/Project";
import proj1 from '../../../assets/images/projects/proj1.jpeg'
import proj2 from '../../../assets/images/projects/proj2.jpeg'
import proj3 from '../../../assets/images/projects/proj3.jpeg'
import proj4 from '../../../assets/images/projects/proj4.jpeg'
import proj5 from '../../../assets/images/projects/proj5.jpeg'
import proj6 from '../../../assets/images/projects/proj6.jpeg'
import {Container} from "../../../components/Container";
import {S} from './Projects_Styles'
import {Zoom} from "react-awesome-reveal";

const projectsArr = [
    {img:proj1,title:'Project Tile goes here',text:'This is sample project description random things are here in description This is sample project lorem ipsum generator for dummy content',techStack:'HTML , JavaScript, SASS, React'},
    {img:proj2,title:'Project Tile goes here',text:'This is sample project description random things are here in description This is sample project lorem ipsum generator for dummy content',techStack:'HTML , JavaScript, SASS, React'},
    {img:proj3,title:'Project Tile goes here',text:'This is sample project description random things are here in description This is sample project lorem ipsum generator for dummy content',techStack:'HTML , JavaScript, SASS, React'},
    {img:proj4,title:'Project Tile goes here',text:'This is sample project description random things are here in description This is sample project lorem ipsum generator for dummy content',techStack:'HTML , JavaScript, SASS, React'},
    {img:proj5,title:'Project Tile goes here',text:'This is sample project description random things are here in description This is sample project lorem ipsum generator for dummy content',techStack:'HTML , JavaScript, SASS, React'},
    {img:proj6,title:'Project Tile goes here',text:'This is sample project description random things are here in description This is sample project lorem ipsum generator for dummy content',techStack:'HTML , JavaScript, SASS, React'}
]

export const Projects: React.FC = () => {
    return (
        <S.Projects id={"projects"}>
            <Container>
                <SectionTitle>Projects</SectionTitle>
                <SectionText>Things I’ve built so far</SectionText>
                <FlexWrapper justify={'center'} wrap={'wrap'} rowGap={'62px'} columnGap={'19px'}>
                    <Zoom cascade={true} damping={0.1}>
                    {
                        projectsArr.map((item,i)=>{
                            const {img,title,text,techStack} = item;
                            return (
                                <Project
                                    key={i}
                                    imgSrc={img}
                                    title={title}
                                    text={text}
                                    techStack={techStack}
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

