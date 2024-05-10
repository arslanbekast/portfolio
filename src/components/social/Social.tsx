import React from 'react';
import {Icon} from "../icon/Icon";
import {S} from './Social_Styles'

type SocialPropsType = {
    color?: string,
    hoverColor?: string,
    display?: string
}

const socialData = [
    {iconId: "socgithub", href:"https://github.com/arslanbekast"},
    {iconId: "codewars", href:"https://www.codewars.com/users/arslanbek-astemirov"},
    {iconId: "linkedin",  href:"https://www.linkedin.com/in/arslanbek-astemirov"},
]

export const Social: React.FC<SocialPropsType> = (props: SocialPropsType) => {
    return (
        <S.Social color={props.color} hoverColor={props.hoverColor} display={props.display}>
            {
                socialData.map((item,i) => {
                    return (
                        <li key={i}>
                            <a href={item.href} target="_blank">
                                <Icon iconId={item.iconId} width={'31'} height={'31'} />
                            </a>
                        </li>
                    )
                })
            }
        </S.Social>
    );
};

