import React from 'react';
import {Icon} from "../../../../components/icon/Icon";
import {S} from "../Stack_Styles";
import {FlexWrapper} from "../../../../components/FlexWrapper";

type StackItemProps = {
    name: string
    icon: string
    width: string
    height: string
}

export const StackItem:React.FC<StackItemProps> = ({name, icon, width, height}) => {
    return (
        <FlexWrapper direction={'column'} align={'center'} justify={'center'} rowGap={'10px'}>
            <S.StackIcon>
                <Icon iconId={icon} width={width} height={height} />
            </S.StackIcon>
            <S.StackName>{name}</S.StackName>
        </FlexWrapper>
    );
};