<<<<<<< HEAD
import React, { Component } from "react";
import ReactDOM from "react-dom";
import Navbar from "./header/Navbar.js";
import Resellers from "./resellers/index.js";
import Vision from "./vision/Vision.js";

export default class Index extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <Vision />
        <Resellers />
      </div>
    );
  }
=======
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Header from './header/Header.js';

export default class Index extends Component {
    render() {
        return (
            <div>
                <Header />
            </div>
        );
    }
>>>>>>> First frontend-code with menu, log  and background
}

if (document.getElementById("app")) {
  ReactDOM.render(<Index />, document.getElementById("app"));
}
