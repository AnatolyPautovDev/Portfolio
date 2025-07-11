import {SectionTitle} from "../../../components/common/SectionTitle.ts";
import {Icon} from "../../../components/icon/Icon.tsx";
import {SectionDescription} from "../../../components/common/SectionDescription.ts";
import {keyGenerator} from "../../../components/common/keyGenerator.ts";
import {Container} from "../../../components/common/Container.ts";
import {GridWrapper} from "../../../components/Wrappers/GridWrapper.ts";
import {S} from './Skills_Styles.ts'
import React from "react";
import {Zoom} from "react-awesome-reveal";

const skillData = [
    {
        iconId: 'html',
        width: '120',
        height: '120'
    },
    {
        iconId: 'css',
        width: '120',
        height: '120'
    },
    {
        iconId: 'js',
        width: '120',
        height: '120'
    },
    {
        iconId: 'react',
        width: '113',
        height: '101'
    },
    {
        iconId: 'redux',
        width: '105',
        height: '100'
    },
    {
        iconId: 'bootstrap',
        width: '88',
        height: '87'
    },
    {
        iconId: 'tailwind',
        width: '131',
        height: '131'
    },
    {
        iconId: 'sass',
        width: '117',
        height: '87'
    },
    {
        iconId: 'git',
        width: '105',
        height: '105'
    },
    {
        iconId: 'greensock',
        width: '120',
        height: '120'
    },
    {
        iconId: 'vscode',
        width: '112',
        height: '112'
    },
    {
        iconId: 'git-hub',
        width: '88',
        height: '88'
    },
]

export const Skills: React.FC = () => {
    return (
        <S.Skills id='skills'>
            <Container>
                <SectionTitle>My Tech Stack</SectionTitle>
                <SectionDescription>Technologies I’ve been working with recently</SectionDescription>
                <GridWrapper gridColumns='6, 120px'
                             rowGap='87px'
                             justifyContent='space-between'
                             justifyItems='center'
                             alignItems='center'>
                    <Zoom cascade={true} damping={0.1} duration={800}>
                        {
                            skillData.map((data) =>
                                <Icon iconId={data.iconId}
                                      width={data.width}
                                      height={data.height}
                                      key={keyGenerator()}
                                />)
                        }
                    </Zoom>
                </GridWrapper>
            </Container>
        </S.Skills>
    );
};



