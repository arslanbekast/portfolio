import './App.css';
import styled from 'styled-components';
import {Header} from "./layout/header/Header";
import {Main} from "./layout/sections/main/Main";
import {Stack} from "./layout/sections/stack/Stack";


function App() {
    return (
        <div className="App">
            <StyledContainer>
                <Header />
                <Main/>
                <Stack/>
            </StyledContainer>
        </div>
    );
}

export default App;

const StyledContainer = styled.div`
  width: 100%;
  max-width: 1193px;
  margin: 30px auto;
`