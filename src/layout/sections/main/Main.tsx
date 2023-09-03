import React from 'react';
import {FlexWrapper} from "../../../components/FlexWrapper";
import {Container} from "../../../components/Container";
import {S} from './Main_Styles'

export const Main: React.FC = () => {
    return (
        <S.Main>
            <Container>
                <FlexWrapper justify={'space-between'} align={'center'} wrap={'wrap'} height={'100%'}>
                    <S.MainText>
                        <span>Hi 👋,</span><br/>
                        <span>My name is</span><br/>
                        <S.Name>Arslanbek Astemirov</S.Name>
                        <S.MainTitle>A Front-End Developer</S.MainTitle>
                    </S.MainText>
                    <S.PhotoBox/>

                </FlexWrapper>
            </Container>
        </S.Main>
    );
};

