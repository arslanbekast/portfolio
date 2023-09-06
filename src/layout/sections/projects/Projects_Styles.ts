import styled from "styled-components";
import {theme} from "../../../styles/Theme";
import {FlexWrapper} from "../../../components/FlexWrapper";

const Projects = styled.section`
  position: relative;
  background-color: ${theme.colors.primaryBg};
`

const Project = styled.div`
  background-color: #fff;
  width: 100%;
  max-width: 375px;
  border-radius: 20px;
  box-shadow: 2px 2px 100px 0px rgba(0, 0, 0, 0.20);
  overflow: hidden;
`

const Image = styled.img`
  width: 100%;
  height: 260px;
  object-fit: cover;
`

const ProjectTextBox = styled.div`
  padding: 25px 30px;
  line-height: 26px;
  
  @media ${theme.media.mobile} {
    padding: 25px;
  }
`

const Title = styled.h3`
  color: ${theme.colors.black};
  font-size: 28px;
  font-weight: 500;
  padding-bottom: 17px;

  @media ${theme.media.mobile} {
    font-size: 23px;
  }
`

const Text = styled.p`
  color: ${theme.colors.grey};
  font-size: 18px;
  font-weight: 300;
  padding-bottom: 12px;

  @media ${theme.media.mobile} {
    font-size: 16px;
  }
`

const StackString = styled.p`
  color: ${theme.colors.matteBlue};
  font-size: 16px;
  font-weight: 400;
  padding-bottom: 20px;
  
  span {
    font-size: 14px;
    font-weight: 300;
  }
`

const Link = styled.a`
  color: ${theme.colors.black};
  font-size: 16px;
  font-weight: 400;
  text-decoration-line: underline;
  white-space: nowrap;
  
  ${FlexWrapper} {
    @media ${theme.media.mobile} {
      column-gap: 5px;
    }
    
  }
`

export const S = {
    Projects,
    Project,
    Image,
    ProjectTextBox,
    Title,
    Text,
    StackString,
    Link
}