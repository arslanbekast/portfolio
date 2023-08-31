import styled from "styled-components";
import {theme} from "../styles/Theme";
import {font} from "../styles/Common";

export const SectionText = styled.p`
  ${font({color: theme.colors.grey, Fmax: 32, Fmin: 22 })}
  text-align: center;
  margin-bottom: 100px;
`