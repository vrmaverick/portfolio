//#04364A
// #176B87
// #64CCC5
// #DAFFFB
import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import ProjectSlider from './components/Project';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <ProjectSlider />
        <Footer />
      </div>
    </Router>
  );
}

export default App;
