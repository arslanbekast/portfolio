import {theme} from "./Theme";

type FontPropsType = {
    family?: string,
    weight?: number,
    color?: string,
    lineHeight?: string,
    Fmin: number,
    Fmax: number
}
export const font = ({family, weight, color, lineHeight, Fmin, Fmax}: FontPropsType) => `
    font-family: ${family || "Poppins"};
    font-weight: ${weight || 400};
    color: ${color || theme.colors.grey};
    line-height: ${lineHeight || "26px"};
    font-size: calc( (100vw - 360px)/(1920 - 360) * (${Fmax} - ${Fmin}) + ${Fmin}px );
`