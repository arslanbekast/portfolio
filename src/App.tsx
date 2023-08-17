import './App.css';
import styled from 'styled-components';
import {Header} from "./layout/header/Header";
import {Main} from "./layout/sections/main/Main";


function App() {
    return (
        <div className="App">
            <StyledContainer>
                <Header />
                <Main/>
            </StyledContainer>
        </div>
    );
}

export default App;

const StyledContainer = styled.div`
  width: 100%;
  max-width: 1193px;
  margin: 50px auto;
`