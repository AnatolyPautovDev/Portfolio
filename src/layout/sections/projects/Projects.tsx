import {SectionTitle} from "../../../components/common/SectionTitle.ts";
import {SectionDescription} from "../../../components/common/SectionDescription.ts";
import {Project} from "./project/Project.tsx";
import project1 from "../../../assets/images/proj-1.webp"
import project2 from "../../../assets/images/proj-2.webp"
import project3 from "../../../assets/images/proj-3.webp"
import project4 from "../../../assets/images/proj-4.webp"
import project5 from "../../../assets/images/proj-5.webp"
import project6 from "../../../assets/images/proj-6.webp"
import {keyGenerator} from "../../../components/common/keyGenerator.ts";
import {Container} from "../../../components/common/Container.ts";
import {GridWrapper} from "../../../components/Wrappers/GridWrapper.ts";
import React from "react";
import {S} from './Projects_Styles.ts'
import {Fade} from "react-awesome-reveal";

const projectsData = [
    {
        imageSrc: project1,
        alt: 'project1',
        title: 'Project Tile goes here',
        description: 'This is sample project description random things are here in description This is sample project lorem ipsum generator for dummy content',
        techStackList: ['HTML', 'JavaScript', 'SASS', 'React']
    },
    {
        imageSrc: project2,
        alt: 'project2',
        title: 'Project Tile goes here',
        description: 'This is sample project description random things are here in description This is sample project lorem ipsum generator for dummy content',
        techStackList: ['HTML', 'JavaScript', 'SASS', 'React']
    },
    {
        imageSrc: project3,
        alt: 'project3',
        title: 'Project Tile goes here',
        description: 'This is sample project description random things are here in description This is sample project lorem ipsum generator for dummy content',
        techStackList: ['HTML', 'JavaScript', 'SASS', 'React']
    },
    {
        imageSrc: project4,
        alt: 'project4',
        title: 'Project Tile goes here',
        description: 'This is sample project description random things are here in description This is sample project lorem ipsum generator for dummy content',
        techStackList: ['HTML', 'JavaScript', 'SASS', 'React']
    },
    {
        imageSrc: project5,
        alt: 'project5',
        title: 'Project Tile goes here',
        description: 'This is sample project description random things are here in description This is sample project lorem ipsum generator for dummy content',
        techStackList: ['HTML', 'JavaScript', 'SASS', 'React']
    },
    {
        imageSrc: project6,
        alt: 'project6',
        title: 'Project Tile goes here',
        description: 'This is sample project description random things are here in description This is sample project lorem ipsum generator for dummy content',
        techStackList: ['HTML', 'JavaScript', 'SASS', 'React']
    },

]

export const Projects: React.FC = () => {
    return (
        <S.Projects id='projects'>
            <Container>
                    <SectionTitle>Projects</SectionTitle>
                    <SectionDescription>Things I’ve built so far</SectionDescription>
                <GridWrapper gridColumns={'3, 375px'} columnGap={'35px'} rowGap={'60px'}>
                    <Fade cascade={true} damping={0.3}>
                        {
                            projectsData.map((data) =>
                                <Project
                                    key={keyGenerator()}
                                    imageSrc={data.imageSrc}
                                    alt={data.alt}
                                    title={data.title}
                                    description={data.description}
                                    techStackList={data.techStackList}
                                />)
                        }
                    </Fade>
                </GridWrapper>
            </Container>
        </S.Projects>
    );
};


