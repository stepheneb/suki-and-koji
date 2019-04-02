import React, { Component} from "react";
import {hot} from "react-hot-loader";
import "./App.css";
import catdog from '../assets/images/animation.gif';

class App extends Component{
  render(){
    return(
      <div className="App">
        <h1>Suki and Koji</h1>
        <img src={catdog} alt="Suki and Koji" />
        <p>
          My dog Suki very gently waking up our cat Koji by putting her whole
          mouth around Koji’s head. Finally Koji just taps Suki’s head with
          his paw (with claws retracted) as if to say, “Yeah, I know you’re
          there — I’m not ready to open my eyes yet.” What I find most amazing
          is to be soooo comfortable in your world that you don’t even open
          your eyes when your head is almost entirely surrounded by a giant
          mouth.
        </p>
      </div>
    );
  }
}

export default hot(module)(App);
