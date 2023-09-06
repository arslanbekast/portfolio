import './App.css';
import {Header} from "./layout/header/Header";
import {Main} from "./layout/sections/main/Main";
import {Stack} from "./layout/sections/stack/Stack";
import {Projects} from "./layout/sections/projects/Projects";
import {Contact} from "./layout/sections/contact/Contact";
import {Footer} from "./layout/footer/Footer";
import {Particle} from "./components/particle/Particle";


function App() {
    return (
        <div className="App">
            <Particle/>
            <Header/>
            <Main/>
            <Stack/>
            <Projects/>
            <Contact/>
            <Footer/>
        </div>
    );
}

export default App;