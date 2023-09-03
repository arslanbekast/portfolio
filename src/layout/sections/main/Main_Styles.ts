import styled from "styled-components";
import {FlexWrapper} from "../../../components/FlexWrapper";
import {theme} from "../../../styles/Theme";
import {font} from "../../../styles/Common";
import photo from '../../../assets/images/photo.jpeg'

const Main = styled.section`
  min-height: 100vh;
  display: flex;

  ${FlexWrapper} {
    @media screen and (max-width: 918px) {
      flex-direction: column;
      justify-content: center;
      gap: 150px;
    }
    @media ${theme.media.mobile} {
      gap: 80px;
    }
  }
`

const PhotoBox = styled.div`
  position: relative;
  width: 350px;
  height: 350px;
  background: url(${photo}) no-repeat center;
  background-size: cover;
  border-radius: 50%;
  
  &::before {
    content: "";
    position: absolute;
    top: -8px;
    bottom: -8px;
    left: -8px;
    right: -8px;
    background: linear-gradient(to bottom, #E70FAA, #00C0FD);
    border-radius: 50%;
    z-index: -1;
  }
  
  @media ${theme.media.mobile} {
    width: 300px;
    height: 300px;
  }
`
const MainText = styled.div`
  
  ${font({weight: 700, color: theme.colors.matteBlue, lineHeight: "70px", Fmax: 58, Fmin: 28 })}

  letter-spacing: -1px;
  white-space: nowrap;
  
  @media ${theme.media.mobile} {
    line-height: 50px;
  }
`
const MainTitle = styled.h1`
  ${font({weight: 700, color: theme.colors.matteBlue, lineHeight: "70px", Fmax: 58, Fmin: 28 })}
  
  @media ${theme.media.mobile} {
    line-height: 50px;
  }
`

const Name = styled.span`
  background: linear-gradient(90deg, #13B0F5 2.60%, #E70FAA 100%);
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`

export const S = {
    Main,
    PhotoBox,
    MainText,
    MainTitle,
    Name
}