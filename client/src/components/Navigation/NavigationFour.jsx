import "../../../node_modules/uikit/dist/css/uikit.min.css";
import "../../assets/css/style.scss";
import "../../assets/css/responsive.scss";
import "../../assets/css/flaticon.css";
import "../../assets/css/animate.min.css";
import Logo from "../Logo/Logo";
import React from "react";
// import { Link, NavLink } from "react-router-dom";
import AnchorLink from "react-anchor-link-smooth-scroll";
import { connect } from "react-redux";

function NavigationFour({ navState }) {
  return (
    <React.Fragment>
      <div
        id="offcanvas-flip"
        className="mobile-navbar uk-mobile-navbar"
        uk-offcanvas="flip: true; overlay: true"
      >
        <div className="uk-offcanvas-bar">
          <button
            className="uk-offcanvas-close"
            type="button"
            uk-close="true"
          ></button>

          <nav className="uk-navbar-container">
            <ul className="uk-navbar-nav">
              <li className={navState === "home" ? "uk-active" : ""}>
                <AnchorLink href="#home">Home</AnchorLink>
              </li>
              <li>
                <AnchorLink href="#about">About</AnchorLink>
              </li>
              <li>
                <AnchorLink href="#services">Services</AnchorLink>
              </li>
              <li>
                <AnchorLink href="#project">Project</AnchorLink>
              </li>
              <li>
                <AnchorLink href="#contact">Contact</AnchorLink>
              </li>
            </ul>
          </nav>
        </div>
      </div>
      {/* End Mobile Navbar */}

      {/* Start Navbar Area */}
      <header
        className="header-area uk-dark"
        data-uk-sticky="top: 0; animation: uk-animation-slide-top;"
      >
        <div className="uk-container">
          <div className="uk-navbar">
            <div className="logo uk-navbar-left">
              <Logo />
            </div>

            <div
              className="uk-navbar-toggle"
              id="navbar-toggle"
              uk-toggle="target: #offcanvas-flip"
            >
              <span></span>
              <span></span>
              <span></span>
            </div>

            <div className="navbar uk-navbar-right">
              <nav className="uk-navbar-container">
                <ul className="uk-navbar-nav">
                  <li className={navState === "home" ? "uk-active" : ""}>
                    <AnchorLink href="#home">Home</AnchorLink>
                  </li>
                  <li className={navState === "about" ? "uk-active" : ""}>
                    <AnchorLink href="#about">About</AnchorLink>
                  </li>
                  <li className={navState === "services" ? "uk-active" : ""}>
                    <AnchorLink href="#services">Services</AnchorLink>
                  </li>
                  <li className={navState === "project" ? "uk-active" : ""}>
                    <AnchorLink href="#project">Project</AnchorLink>
                  </li>
                  <li className={navState === "contact" ? "uk-active" : ""}>
                    <AnchorLink href="#contact">Contact</AnchorLink>
                  </li>
                </ul>
              </nav>
            </div>
          </div>
        </div>
      </header>
    </React.Fragment>
  );
}

const mapStateToProps = state => ({ navState: state.tools.section });

const mapDispatchToProps = {};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(NavigationFour);
