import {Container} from "../../../components/common/Container.ts";
import {FlexWrapper} from "../../../components/Wrappers/FlexWrapper.ts";
import React from "react";
import {S} from './About_Styles.ts'
import {AboutList} from "./aboutList/AboutList.tsx";
import {Fade} from "react-awesome-reveal";

const workData = [
    {
        caption: 'Junior Web Developer',
        busyness: 'Full Time',
        organization: 'Dr. Rajkumar’s Learning App',
        location: 'Bengaluru',
        period: 'Sep 2021 - Dec 2021'
    },
    {
        caption: 'Web Development Intern',
        busyness: 'Internship',
        organization: 'IonPixelz Web Solutions',
        location: 'Bengaluru',
        period: 'Sep 2021 - Dec 2021'
    },
    {
        caption: 'SEO / SEM Specialist',
        busyness: 'Internship',
        organization: 'HAAPS',
        location: 'Bengaluru',
        period: 'Sep 2021 - Dec 2021'
    }
]
const educationData = [
    {
        caption: 'Bachelor in Electronics & Communication',
        busyness: 'Full Time',
        organization: 'Bangalore Instutute of Technology',
        period: 'Aug 2015 - Dec 2020'
    }
]

export const About: React.FC = () => {
    return (
        <S.About id='about'>
            <Container>
                <FlexWrapper direction="column" gap='38px'>
                    <Fade cascade={true} damping={0.1} direction={'up'}>
                        <S.Title>About Me</S.Title>
                        <S.AboutText>The Generator App is an online tool that helps you to export ready-made templates ready to work as your future website. It helps you to combine slides, panels and other components and export it as a set of static files: HTML/CSS/JS.</S.AboutText>
                        <AboutList title='Work Experience' data={workData} />
                        <AboutList title='Education' data={educationData} />
                    </Fade>
                </FlexWrapper>
            </Container>
        </S.About>
    );
};


