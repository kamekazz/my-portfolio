import "../../../node_modules/uikit/dist/css/uikit.min.css";
import "../../assets/css/style.scss";
import "../../assets/css/responsive.scss";
import "../../assets/css/flaticon.css";
import "../../assets/css/animate.min.css";
import Logo from "../Logo/Logo";
import React from "react";
import { Link, NavLink } from "react-router-dom";
import AnchorLink from "react-anchor-link-smooth-scroll";

function NavigationFour() {
  let pathName = window.location.pathname;

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
              <li
                className={
                  pathName === "/home-four" ||
                  pathName === "/home-five" ||
                  pathName === "/home-six" ||
                  pathName === "/home-seven"
                    ? "uk-active"
                    : ""
                }
              >
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
                  <li>
                    <AnchorLink href="#home">Home</AnchorLink>
                    {/* <div uk-dropdown="true">
                                                <ul className="uk-nav uk-dropdown-nav">
                                                    <li className={pathName === '/home-four' ? 'uk-active' : ''}>
                                                        <Link 
                                                            to="/home-four"
                                                        >
                                                            Home Four
                                                        </Link>
                                                    </li>
                                                    <li className={pathName === '/home-five' ? 'uk-active' : ''}>
                                                        <Link 
                                                            to="/home-five"
                                                        >
                                                            Home Five
                                                        </Link>
                                                    </li>
                                                    <li className={pathName === '/home-six' ? 'uk-active' : ''}>
                                                        <Link 
                                                            to="/home-six"
                                                        >
                                                            Home Six
                                                        </Link>
                                                    </li>
                                                    <li className={pathName === '/home-seven' ? 'uk-active' : ''}>
                                                        <Link 
                                                            to="/home-seven"
                                                        >
                                                            Home Seven
                                                        </Link>
                                                    </li>
                                                </ul>
                                            </div> */}
                  </li>
                  <li>
                    <AnchorLink href="#about">About</AnchorLink>
                  </li>
                  <li
                    className={
                      pathName === "/services" ||
                      pathName === "/services-two" ||
                      pathName === "/service-details"
                        ? "uk-active"
                        : ""
                    }
                  >
                    <AnchorLink href="#services">Services</AnchorLink>
                  </li>
                  <li
                    className={
                      pathName === "/projects" ||
                      pathName === "/project-details"
                        ? "uk-active"
                        : ""
                    }
                  >
                    <AnchorLink href="#project">Project</AnchorLink>
                  </li>
                  <li className={pathName === "/contact" ? "uk-active" : ""}>
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

export default NavigationFour;
