import Header from './components/Header'
import FirstSection from './components/FirstSection'
import AboutMe from './components/AboutMe'
import Skills from './components/Skills'
import Projects from './components/Projects'
import './App.css'
import { BrowserRouter as Router,Routes,Route } from 'react-router';

function App() {
  return (
    <div> 

      <Header/>
      <Routes>
          <Route path="/" element={<FirstSection/>} />
          <Route path="/aboutMe" element={<AboutMe/>}/>
          <Route path="/skills" element={<Skills/>}/>
          <Route path="/portfolio" element={<Projects/>}/>
      </Routes>

    </div>
    


    // <Router>


    //       <Route path= "/" exact component={}/>
    //       <Route path= "/AboutMe" component={AboutMe}/>
      
    //     {/* <FirstSection className="FirstSection" />
    //     <AboutMe className="AboutMe"/> */}
    //     {/* <Skills/>
    //     <Projects /> */}
    // </Router>
  );
}

export default App;
