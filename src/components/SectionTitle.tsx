import styled from "styled-components";
import {theme} from "../styles/Theme";
import {font} from "../styles/Common";

export const SectionTitle = styled.h2`
  ${font({weight: 700, color: theme.colors.matteBlue, Fmax: 48, Fmin: 38 })}
  //color: ${theme.colors.matteBlue};
  text-align: center;
  //font-size: 48px;
  //font-weight: 700;
  //line-height: 26px;
  margin-bottom: 50px;
`