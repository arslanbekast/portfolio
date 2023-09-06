import styled from "styled-components";
import {theme} from "../../styles/Theme";

const Header = styled.header`
  background-color: ${theme.colors.primaryBg};
  padding: 16px 0;
  position: fixed;
  left: 0;
  top: 0;
  right: 0;
  z-index: 99999;
`

export const S = {
    Header
}