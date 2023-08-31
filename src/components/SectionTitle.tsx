import styled from "styled-components";
import {theme} from "../styles/Theme";
import {font} from "../styles/Common";

export const SectionTitle = styled.h2`
  ${font({weight: 700, color: theme.colors.matteBlue, Fmax: 48, Fmin: 32 })}
  text-align: center;
  margin-bottom: 50px;
`