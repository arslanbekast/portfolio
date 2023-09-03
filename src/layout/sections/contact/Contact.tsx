import React from 'react';
import {Container} from "../../../components/Container";
import {S} from './Contact_Styles'

export const Contact: React.FC = () => {
    return (
        <S.Contact>
            <Container>
                <S.Title>For any questions please mail me:</S.Title>
                <S.Email href={"#"}>astemirow@mail.ru</S.Email>
            </Container>
        </S.Contact>
    );
};

