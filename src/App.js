import React from "react";
import "./App.css";
import NavBar from "./components/NavBar";
import About from "./components/About";
import Header from "./components/Header";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <>
      <div className="App">
        <NavBar></NavBar>
        <div className="App-header">
          <Header></Header>
        </div>
        <div className="About">
          <About></About>
        </div>
        <div className="Projects">
          <Projects></Projects>
        </div>
        <div className="Contact">
          <Contact></Contact>
        </div>
      </div>
    </>
  );
}

export default App;
