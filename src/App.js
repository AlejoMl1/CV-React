import { Routes, Route, HashRouter } from "react-router-dom";
// import Header from './components/Header'
import FirstSection from "./components/FirstSection";
import AboutMe from "./components/AboutMe";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Layout from "./components/Layout";
import "./App.css";

function App() {
  return (
    <Layout>
      <Routes>
        <Route exact path="/" element={<FirstSection />} />
        <Route path="/aboutMe" element={<AboutMe />} />
        <Route path="/skills" element={<Skills />} />
        <Route path="/portfolio" element={<Projects />} />
      </Routes>
    </Layout>
  );
}

export default App;
