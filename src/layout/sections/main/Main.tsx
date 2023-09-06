import React from 'react';
import {FlexWrapper} from "../../../components/FlexWrapper";
import {Container} from "../../../components/Container";
import {S} from './Main_Styles'
import Typewriter from 'typewriter-effect';

export const Main: React.FC = () => {
    return (
        <S.Main id={"home"}>
            <Container>
                <FlexWrapper justify={'space-between'} align={'center'} wrap={'wrap'} height={'100%'}>
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
                    <S.PhotoBox/>
                </FlexWrapper>
            </Container>
        </S.Main>
    );
};

