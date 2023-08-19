import React from 'react';
import styled from "styled-components";

export const Menu = (props: {menuItems: Array<string>}) => {
    return (
        <StyledMenu>
            <ul>
                {props.menuItems.map((item, i)=>{
                    return <li key={i}><a href="">{item}</a></li>
                })}
            </ul>
        </StyledMenu>
    );
};

const StyledMenu = styled.nav`
  ul {
    list-style-type: none;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    gap: 50px;
    margin: 0;
    padding: 0;
  }
`