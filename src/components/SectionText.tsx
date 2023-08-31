import styled from "styled-components";
import {theme} from "../styles/Theme";
import {font} from "../styles/Common";

export const SectionText = styled.p`
  ${font({color: theme.colors.grey, Fmax: 32, Fmin: 26 })}
  //color: ${theme.colors.grey};
  text-align: center;
  //font-size: 32px;
  //font-weight: 400;
  //line-height: 26px;
  margin-bottom: 100px;
`