import {createGlobalStyle} from "styled-components";

export const GlobalStyle = createGlobalStyle`
  *,
  *::before,
  *::after {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  
  * {
    scrollbar-width: thin;
    scrollbar-color: #666 #42446E;
  }

  *::-webkit-scrollbar
  {
    width: 10px;
  }
  *::-webkit-scrollbar:horizontal {
    height: 10px;
  }

  *::-webkit-scrollbar-track,
  *::-webkit-scrollbar-corner{
    background-color: #42446E;
  }

  *::-webkit-scrollbar-thumb {
    background-color: #666;
    border: 3px solid #42446E;
    border-radius: 5px;
  }

  body {
    margin: 0;
    font-family: 'Poppins', -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
    'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
    sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  a {
    text-decoration: none;
  }

  ul {
    list-style: none;
  }

  section {
    padding: 100px 0;
  }
`