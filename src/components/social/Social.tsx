import React from 'react';
import {Icon} from "../icon/Icon";
import {S} from './Social_Styles'

type SocialPropsType = {
    color?: string,
    hoverColor?: string,
    display?: string
}

const socialData = [
    {iconId: "socgithub"},
    {iconId: "twitter"},
    {iconId: "linkedin"},
]

export const Social: React.FC<SocialPropsType> = (props: SocialPropsType) => {
    return (
        <S.Social color={props.color} hoverColor={props.hoverColor} display={props.display}>
            {
                socialData.map((item,i) => {
                    return (
                        <li key={i}>
                            <a href="">
                                <Icon iconId={item.iconId} width={'31'} height={'31'} />
                            </a>
                        </li>
                    )
                })
            }
        </S.Social>
    );
};

