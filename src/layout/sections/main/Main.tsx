import React from 'react';
import {FlexWrapper} from "../../../components/FlexWrapper";
import {Container} from "../../../components/Container";
import {S} from './Main_Styles'
import Typewriter from 'typewriter-effect';
import Tilt from 'react-parallax-tilt';
import {Zoom} from "react-awesome-reveal";

export const Main: React.FC = () => {
    return (
        <S.Main id={"home"}>
            <Container>
                <FlexWrapper justify={'space-between'} align={'center'} wrap={'wrap'} height={'100%'}>
                    <Zoom cascade={true} damping={0.2}>
                        <S.MainText>
                            <span>Hi 👋,</span><br/>
                            <span>My name is</span><br/>
                            <S.Name>Arslanbek Astemirov</S.Name>
                            {/*<S.MainTitle>A Front-End Developer</S.MainTitle>*/}
                            <S.MainTitle>
                                <p>A Frontend Developer</p>
                                <Typewriter
                                    options={{
                                        strings: ['A Frontend Developer.'],
                                        autoStart: true,
                                        loop: true,
                                        delay: 50
                                    }}
                                />
                            </S.MainTitle>
                        </S.MainText>
                        <Tilt
                            className="parallax-effect-img"
                            tiltMaxAngleX={40}
                            tiltMaxAngleY={40}
                            perspective={800}
                            transitionSpeed={1500}
                            scale={1}
                            gyroscope={true}>
                            <S.PhotoBox/>
                        </Tilt>
                    </Zoom>
                </FlexWrapper>
            </Container>
        </S.Main>
    );
};

