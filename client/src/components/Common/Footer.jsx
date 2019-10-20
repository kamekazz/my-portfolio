import React from "react";
import { Link } from "react-router-dom";
import footerShapeOne from "../../assets/images/footer-shape1.png";
import footerShapeTwo from "../../assets/images/footer-shape2.png";
import GoTop from "./GoTop";
import Logo from "../Logo/Logo";

class Footer extends React.Component {
  render() {
    return (
      <footer className="footer-area uk-dark uk-footer">
        <div className="uk-container">
          <div className="uk-grid uk-grid-match uk-grid-medium uk-child-width-1-4@m uk-child-width-1-2@s">
            <div className="item">
              <div className="single-footer-widget">
                <div className="logo">
                  <Logo />
                </div>

                <p>
                  Motivated, personable Freelance Web Developer who loves to
                  learn and creatively solve problems. I have a Successful 5+
                  year track record building websites in small business, agency,
                  education and in­house sectors.
                </p>
              </div>
            </div>

            <div className="item">
              <div className="single-footer-widget">
                <h3>New York</h3>
                <div className="bar"></div>

                <div className="location">
                  <p>
                    Manhattan <br />
                    United State
                  </p>
                </div>
              </div>
            </div>

            <div className="item">
              <div className="single-footer-widget">
                <h3>Santiago</h3>
                <div className="bar"></div>

                <div className="location">
                  <p>
                    Santiago De Los Caballeros
                    <br />
                    Dominican Republic
                  </p>
                </div>
              </div>
            </div>

            <div className="item">
              <div className="single-footer-widget">
                <h3>Contact</h3>
                <div className="bar"></div>

                <ul className="contact-info">
                  <li>
                    <Link to="#">taveras78@gmail.com</Link>
                  </li>
                  <li>
                    <Link to="#">978 706-3407</Link>
                  </li>
                </ul>
                <ul className="social">
                  <li>
                    <a
                      href="https://www.facebook.com/manuel.taveras.5680?ref=bookmarks"
                      target="_blank"
                    >
                      <i className="flaticon-logo"></i>
                    </a>
                  </li>
                  <li>
                    <a href="https://github.com/kamekazz" target="_blank">
                      <i className="fab fa-github"></i>
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://www.linkedin.com/in/manuel-taveras-242ba9179/"
                      target="_blank"
                    >
                      <i className="flaticon-linkedin"></i>
                    </a>
                  </li>
                  {/* <li>
                    <Link to="#">
                      <i className="flaticon-logo-1"></i>
                    </Link>
                  </li> */}
                </ul>
              </div>
            </div>
          </div>

          <div className="copyright-area">
            <div className="uk-grid uk-grid-match uk-grid-medium uk-child-width-1-2@m uk-child-width-1-2@s">
              {/* <div className="item">
                <p>© EnvyTheme. All Rights Reserved, 2019</p>
              </div> */}

              {/* <div className="item">
                <ul>
                  <li>
                    <Link to="#">Terms & Conditions</Link>
                  </li>
                  <li>
                    <Link to="#">Privacy Policy</Link>
                  </li>
                </ul>
              </div> */}
            </div>
            <GoTop scrollStepInPx="50" delayInMs="16.66" />
          </div>
        </div>

        <div className="br-line"></div>
        <div className="footer-shape1">
          <img src={footerShapeOne} alt="shape" />
        </div>
        <div className="footer-shape2">
          <img src={footerShapeTwo} alt="shape" />
        </div>
      </footer>
    );
  }
}

export default Footer;
