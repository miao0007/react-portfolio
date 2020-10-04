import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Wrapper from "./components/Wrapper";
import Footer from "./components/Footer";
import About from "./pages/About";
import Project from "./pages/Project";
import Home from "./pages/Home";
import Skills from "./pages/Skills";


function App() {
  return (
    <Router>
  
      <Navbar />
      <br />
      <Wrapper>
      <Route exact path="/" component={About} />
      <Route exact path="/React-Portfolio/About" component={About} />
      <Route exact path="/React-Portfolio/Project" component={Project} />
      <Route exact path="/React-Portfolio/Skills" component={Skills} />
      </Wrapper>
      <br/>
      <Footer  />
  
    </Router>


  );

}

export default App;