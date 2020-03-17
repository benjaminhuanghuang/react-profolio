import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
//
import Particles from "react-particles-js";
//
import Home from "./components/Home";
import About from "./components/About";
import Navbar from "./components/Navbar";
import Header from "./components/Header";
//
import "./App.css";

const useStyles = makeStyles({
  particlesCanva: {
    position: "absolute"
  }
});

function App() {
  const classes = useStyles()

  return (
    <Router>
      <Navbar />
      <Header />
      <Particles className={classes.particlesCanva}
        params={{
          particles: {
            number: {
              value: 45,
              density:{
                enable: true,
                value_area: 900
              }
            }
          }
        }}
      ></Particles>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/about" component={About} />
      </Switch>
    </Router>
  );
}

export default App;
