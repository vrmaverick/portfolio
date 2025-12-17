//#04364A
// #176B87
// #64CCC5
// #DAFFFB
import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import ProjectSlider from './components/Project';
import About from './components/About'
import Card from './components/Card'
import More from './components/More'
import Contact from './components/Contact'
import ExperienceComponent from './components/Experience'
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="App">
        <div className="header-spacer" style={{ marginBottom: "7vh", backgroundColor: "rgba(220, 0, 0, 0.75)" }}></div>
        <Header />
        <ProjectSlider />
        <div id="about">
        <About />
        </div>
        <div id="project">
        <Card />
        </div>
        <More />  
        <ExperienceComponent />  
        <div id="contact">
        <Contact />
        </div>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
