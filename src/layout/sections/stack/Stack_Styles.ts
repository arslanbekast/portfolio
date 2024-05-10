import styled from "styled-components";
import {theme} from "../../../styles/Theme";

const Stack = styled.section`
  position: relative;
  background-color: ${theme.colors.primaryBg};
  
  svg {
    transition: .2s;
    
    &:hover {
      transform: scale(1.2);
    }
  }
`

const GridWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  grid-template-rows: repeat(2, 1fr);
  justify-items: center;
  align-items: center;
  justify-content: space-between;
  row-gap: 50px;

  @media ${theme.media.tablet} {
    grid-template-columns: repeat(4, 1fr);
    grid-template-rows: repeat(3, 1fr);
  }
  @media ${theme.media.mobile} {
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: repeat(6, 1fr);
  }
`
const StackIcon = styled.div`
    width: 120px;
    height: 120px;
    display: flex;
    align-items: center;
    justify-content: center;
`
const StackName = styled.span`
    font-size: 18px;
    font-weight: 500;
`

export const S = {
    Stack,
    GridWrapper,
    StackIcon,
    StackName
}