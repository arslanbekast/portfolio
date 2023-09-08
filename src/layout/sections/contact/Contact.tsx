import React from 'react';
import {Container} from "../../../components/Container";
import {S} from './Contact_Styles'
import {JackInTheBox} from "react-awesome-reveal";

export const Contact: React.FC = () => {
    return (
        <S.Contact id={"contact"}>
            <Container>
                <JackInTheBox cascade={true} damping={0.05}>
                    <S.Title>For any questions please mail me:</S.Title>
                    <S.Email href={"#"}>astemirow@mail.ru</S.Email>
                </JackInTheBox>
            </Container>
        </S.Contact>
    );
};

