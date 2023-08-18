import React from 'react';
import styled from "styled-components";
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

export const Projects = () => {
    return (
        <StyledProjects>
            <SectionTitle>Projects</SectionTitle>
            <SectionText>Things I’ve built so far</SectionText>
            <FlexWrapper justify={'space-between'} wrap={'wrap'} rowGap={'62px'}>
                <Project
                    imgSrc={proj1}
                    title={'Project Tile goes here'}
                    text={'This is sample project description random things are here in description This is sample project lorem ipsum generator for dummy content'}
                    techStack={'HTML , JavaScript, SASS, React'}
                />
                <Project
                    imgSrc={proj2}
                    title={'Project Tile goes here'}
                    text={'This is sample project description random things are here in description This is sample project lorem ipsum generator for dummy content'}
                    techStack={'HTML , JavaScript, SASS, React'}
                />
                <Project
                    imgSrc={proj3}
                    title={'Project Tile goes here'}
                    text={'This is sample project description random things are here in description This is sample project lorem ipsum generator for dummy content'}
                    techStack={'HTML , JavaScript, SASS, React'}
                />
                <Project
                    imgSrc={proj4}
                    title={'Project Tile goes here'}
                    text={'This is sample project description random things are here in description This is sample project lorem ipsum generator for dummy content'}
                    techStack={'HTML , JavaScript, SASS, React'}
                />
                <Project
                    imgSrc={proj5}
                    title={'Project Tile goes here'}
                    text={'This is sample project description random things are here in description This is sample project lorem ipsum generator for dummy content'}
                    techStack={'HTML , JavaScript, SASS, React'}
                />
                <Project
                    imgSrc={proj6}
                    title={'Project Tile goes here'}
                    text={'This is sample project description random things are here in description This is sample project lorem ipsum generator for dummy content'}
                    techStack={'HTML , JavaScript, SASS, React'}
                />
            </FlexWrapper>
        </StyledProjects>
    );
};

const StyledProjects = styled.section`
  min-height: 100vh;
  background-color: #64ffb8;
`