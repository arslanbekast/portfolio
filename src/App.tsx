import './App.css';
import styled from 'styled-components';
import {Header} from "./layout/header/Header";


function App() {
    return (
        <div className="App">
            <StyledContainer>
                <Header />
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