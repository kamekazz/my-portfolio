import "../../../node_modules/uikit/dist/css/uikit.min.css";
import "../../assets/css/style.scss";
import "../../assets/css/responsive.scss";
import "../../assets/css/flaticon.css";
import "../../assets/css/animate.min.css";
import Logo from "../Logo/Logo";
import React from "react";
import { Link, NavLink } from "react-router-dom";

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
                <Link to="#">Home</Link>
                <div uk-dropdown="mode: click">
                  <ul className="uk-nav uk-dropdown-nav">
                    <li
                      className={pathName === "/home-four" ? "uk-active" : ""}
                    >
                      <Link to="/home-four">Home Four</Link>
                    </li>
                    <li
                      className={pathName === "/home-five" ? "uk-active" : ""}
                    >
                      <Link to="/home-five">Home Five</Link>
                    </li>
                    <li className={pathName === "/home-six" ? "uk-active" : ""}>
                      <Link to="/home-six">Home Six</Link>
                    </li>
                    <li
                      className={pathName === "/home-seven" ? "uk-active" : ""}
                    >
                      <Link to="/home-seven">Home Seven</Link>
                    </li>
                  </ul>
                </div>
              </li>
              <li>
                <Link to="/about">About</Link>
              </li>
              <li>
                <Link to="#">Services</Link>
                <div uk-dropdown="mode: click">
                  <ul className="uk-nav uk-dropdown-nav">
                    <li>
                      <Link to="/services">Services One</Link>
                    </li>
                    <li>
                      <Link to="/services-two">Services Two</Link>
                    </li>
                    <li>
                      <Link to="/service-details">Single Services</Link>
                    </li>
                  </ul>
                </div>
              </li>
              <li>
                <Link to="#">Project</Link>
                <div uk-dropdown="mode: click">
                  <ul className="uk-nav uk-dropdown-nav">
                    <li>
                      <Link to="/projects">Project</Link>
                    </li>
                    <li>
                      <Link to="/project-details">Single Project</Link>
                    </li>
                  </ul>
                </div>
              </li>
              <li>
                <Link to="/testimonials">Testimonials</Link>
              </li>
              <li>
                <Link to="/team">Team</Link>
              </li>
              <li>
                <Link to="#">Blog</Link>
                <div uk-dropdown="mode: click">
                  <ul className="uk-nav uk-dropdown-nav">
                    <li>
                      <Link to="/blog">Blog</Link>
                    </li>
                    <li>
                      <Link to="/blog-details">Single Blog</Link>
                    </li>
                  </ul>
                </div>
              </li>
              <li>
                <Link to="/contact">Contact</Link>
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
                    <NavLink exact to="/">
                      Home
                    </NavLink>
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
                    <NavLink exact to="/about">
                      About
                    </NavLink>
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
                    <Link to="#">Services</Link>
                    <div uk-dropdown="true">
                      <ul className="uk-nav uk-dropdown-nav">
                        <li
                          className={
                            pathName === "/services" ? "uk-active" : ""
                          }
                        >
                          <Link to="/services">Services One</Link>
                        </li>
                        <li
                          className={
                            pathName === "/services-two" ? "uk-active" : ""
                          }
                        >
                          <Link to="/services-two">Services Two</Link>
                        </li>
                        <li
                          className={
                            pathName === "/service-details" ? "uk-active" : ""
                          }
                        >
                          <Link to="/service-details">Single Services</Link>
                        </li>
                      </ul>
                    </div>
                  </li>
                  <li
                    className={
                      pathName === "/projects" ||
                      pathName === "/project-details"
                        ? "uk-active"
                        : ""
                    }
                  >
                    <Link to="#">Project</Link>
                    <div uk-dropdown="true">
                      <ul className="uk-nav uk-dropdown-nav">
                        <li
                          className={
                            pathName === "/projects" ? "uk-active" : ""
                          }
                        >
                          <Link to="/projects">Project</Link>
                        </li>
                        <li
                          className={
                            pathName === "/project-details" ? "uk-active" : ""
                          }
                        >
                          <Link to="/project-details">Single Project</Link>
                        </li>
                      </ul>
                    </div>
                  </li>
                  <li
                    className={pathName === "/testimonials" ? "uk-active" : ""}
                  >
                    <Link to="/testimonials">Testimonials</Link>
                  </li>
                  <li className={pathName === "/team" ? "uk-active" : ""}>
                    <Link to="/team">Team</Link>
                  </li>
                  <li
                    className={
                      pathName === "/blog" || pathName === "/blog-details"
                        ? "uk-active"
                        : ""
                    }
                  >
                    <Link to="#">Blog</Link>
                    <div uk-dropdown="true">
                      <ul className="uk-nav uk-dropdown-nav">
                        <li className={pathName === "/blog" ? "uk-active" : ""}>
                          <Link to="/blog">Blog</Link>
                        </li>
                        <li
                          className={
                            pathName === "/blog-details" ? "uk-active" : ""
                          }
                        >
                          <Link to="/blog-details">Single Blog</Link>
                        </li>
                      </ul>
                    </div>
                  </li>
                  <li className={pathName === "/contact" ? "uk-active" : ""}>
                    <Link to="/contact">Contact</Link>
                  </li>
                </ul>
              </nav>

              <div className="lang">
                <form>
                  <div>
                    <select>
                      <option value="eng">En</option>
                    </select>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </header>
    </React.Fragment>
  );
}

export default NavigationFour;
