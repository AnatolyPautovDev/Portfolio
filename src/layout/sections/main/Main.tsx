import photo from "../../../assets/images/photo.webp"
import {FlexWrapper} from "../../../components/Wrappers/FlexWrapper.ts";
import {Container} from "../../../components/common/Container.ts";
import React from "react";
import {S} from './Main_Styles.ts'
import Typewriter from 'typewriter-effect';
import Tilt from 'react-parallax-tilt';

export const Main: React.FC = () => {
    return (
        <S.Main id='home'>
            <Container>
                <h1 className='visually-hidden'>Front-end Developer</h1>
                <FlexWrapper justify="space-between" align='center' wrap={'wrap'}>
                    <S.Greeting>
                        Hi 👋,<br/>
                        My name is<br/>
                        <S.Name>Pavan MG</S.Name>
                        <Typewriter
                            options={{
                                strings: ['Frontend Developer','I build things for web'],
                                autoStart: true,
                                loop: true,
                            }}
                        />
                    </S.Greeting>
                    <Tilt>
                        <S.ImageWrapper>
                            <S.Photo src={photo} alt='photo'/>
                        </S.ImageWrapper>
                    </Tilt>
                </FlexWrapper>
            </Container>
        </S.Main>
    );
};



