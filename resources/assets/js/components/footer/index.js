import React, { Component } from "react";
import ReactDOM from "react-dom";
import "./footer.css";
import SodaLogo from "./SodaFactory.png";
import FbLogo from "./fb.svg";
import InstaLogo from "./insta.svg";

class Footer extends Component {
  render() {
    return (
      <footer className="footer">
        <div className="container">
          <div className="content">
            <p className="footer-title">Contact Us</p>
            <p className="footer-p">info@mega-mate.com</p>
          </div>
          <div className="content">
            <a className="logo-link" href="#">
              <img className="logo" src={SodaLogo} />
            </a>
            <a className="logo-link" href="#">
              <img className="logo" src={InstaLogo} />
            </a>
            <a className="logo-link" href="#">
              <img className="logo" src={FbLogo} />
            </a>
          </div>
        </div>
        <div className="container">
          <div className="content">
            <p className="footer-news">Sign up for the newsletter!</p>
            <div className="field has-addons">
              <div className="control" id="control-input">
                <input
                  id="input-field"
                  className="input"
                  type="text"
                  placeholder="Email goes here :)"
                />
              </div>
              <div className="control">
                <a id="news-button" className="button is-info">
                  Submit
                </a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    );
  }
}
export default Footer;