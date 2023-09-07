import React, {useEffect, useState} from 'react';
import styled from "styled-components";
import toTopBtn from '../../assets/images/icons/toTopBtn.png';
import {animateScroll as scroll} from "react-scroll/modules";

export const GoTopBtn = () => {

    const [showBtn, setShowBtn] = useState(false);

    useEffect(() => {
       window.addEventListener('scroll', () => {
           window.scrollY > 200 ? setShowBtn(true) : setShowBtn(false);
       })
    }, []);

    return (
        <>
            {
                showBtn && (
                    <StyledGoTopBtn onClick={() => {scroll.scrollToTop()}}>
                        <img src={toTopBtn} alt="Go to top button"/>
                    </StyledGoTopBtn>
                )
            }

        </>

    );
};

const StyledGoTopBtn = styled.button`
  background-color: transparent;
  text-align: center;
  border: none;
  cursor: pointer;
  padding: 8px;
  position: fixed;
  bottom: 30px;
  right: 30px;
  transition: .2s;
  
  &:hover {
    transform: scale(1.2);
  }
`