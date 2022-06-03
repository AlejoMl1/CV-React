
import { Routes, Route, HashRouter } from "react-router-dom";
// import Header from './components/Header'
import FirstSection from './components/FirstSection'
import AboutMe from './components/AboutMe'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Layout from './components/Layout';
import './App.css'
// import { BrowserRouter as Router,Routes,Route } from 'react-router';
// import Error404 from "./components/Error404";

function App() {
  return (
 
      <Layout>
        <Routes>
          <Route exact path="/" element={<FirstSection/>} />
          <Route path="/aboutMe" element={<AboutMe/>}/>
          <Route path="/skills" element={<Skills/>}/>
          <Route path="/portfolio" element={<Projects/>}/>
        </Routes>
      </Layout>
  );
}

export default App;

{/* <Routes>
<Route path="/" element={<App />}>
  <Route path="expenses" element={<Expenses />} />
  <Route path="invoices" element={<Invoices />} />
</Route>
</Routes> */}