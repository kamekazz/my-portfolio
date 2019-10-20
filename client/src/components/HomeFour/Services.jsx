import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { acChangesService } from "../../redux/Tools/actions";
import AnchorLink from "react-anchor-link-smooth-scroll";

class Services extends React.Component {
  render() {
    const { acChangesService } = this.props;
    return (
      <section
        id="services"
        className="services-area uk-dark uk-services uk-section"
      >
        <div className="uk-container">
          <div className="uk-section-title section-title">
            <span>What can i build ?</span>
            <h2>My Services</h2>
            <div className="bar"></div>
          </div>

          <AnchorLink
            href="#contact"
            className="uk-grid uk-grid-match uk-grid-medium uk-child-width-1-3@m uk-child-width-1-2@s"
          >
            <div
              onClick={() => acChangesService("Custom CMD")}
              className="item"
            >
              <div className="single-services">
                <div className="icon">
                  <i className="flaticon-plan"></i>
                </div>
                <h3>Custom CMD</h3>

                <i className="flaticon-right link-btn"></i>

                <Link to="#" className="link uk-position-cover"></Link>
              </div>
            </div>

            <div
              onClick={() => acChangesService("UX & UI Design")}
              className="item"
            >
              <div className="single-services ">
                <div className="icon">
                  <i className="flaticon-ux-design"></i>
                </div>
                <h3>UX & UI Design</h3>

                <i className="flaticon-right link-btn"></i>

                <Link to="#" className="link uk-position-cover"></Link>
              </div>
            </div>

            <div onClick={() => acChangesService("Database")} className="item">
              <div className="single-services">
                <div className="icon">
                  <i className="flaticon-data"></i>
                </div>
                <h3>Database</h3>

                <i className="flaticon-right link-btn"></i>

                <Link to="#" className="link uk-position-cover"></Link>
              </div>
            </div>

            <div
              onClick={() => acChangesService("Management")}
              className="item"
            >
              <div className="single-services">
                <div className="icon">
                  <i className="flaticon-project"></i>
                </div>
                <h3>Management</h3>

                <i className="flaticon-right link-btn"></i>

                <Link to="#" className="link uk-position-cover"></Link>
              </div>
            </div>

            <div
              onClick={() => acChangesService("Creative Solutions")}
              className="item"
            >
              <div className="single-services">
                <div className="icon">
                  <i className="flaticon-think"></i>
                </div>
                <h3>Creative Solutions</h3>

                <i className="flaticon-right link-btn"></i>

                <Link to="#" className="link uk-position-cover"></Link>
              </div>
            </div>

            <div
              onClick={() => acChangesService("Custom Restful API")}
              className="item"
            >
              <div className="single-services">
                <div className="icon">
                  <i className="flaticon-shout"></i>
                </div>
                <h3>Custom Restful API</h3>

                <i className="flaticon-right link-btn"></i>

                <Link to="#" className="link uk-position-cover"></Link>
              </div>
            </div>

            <div
              onClick={() => acChangesService("Data Virtualization")}
              className="item"
            >
              <div className="single-services">
                <div className="icon">
                  <i className="flaticon-analytics-1"></i>
                </div>
                <h3>Data Virtualization</h3>

                <i className="flaticon-right link-btn"></i>

                <Link to="#" className="link uk-position-cover"></Link>
              </div>
            </div>

            <div
              onClick={() => acChangesService("Single Page Application")}
              className="item"
            >
              <div className="single-services">
                <div className="icon">
                  <i className="flaticon-camera"></i>
                </div>
                <h3>Single Page Application</h3>

                <i className="flaticon-right link-btn"></i>

                <Link to="#" className="link uk-position-cover"></Link>
              </div>
            </div>

            <div
              onClick={() => acChangesService("Mern Stack")}
              className="item"
            >
              <div className="single-services">
                <div className="icon">
                  <i className="flaticon-chat"></i>
                </div>
                <h3>Mern Stack</h3>

                <i className="flaticon-right link-btn"></i>

                <Link to="#" className="link uk-position-cover"></Link>
              </div>
            </div>
          </AnchorLink>
        </div>
      </section>
    );
  }
}

const mapStateToProps = state => ({});

const mapDispatchToProps = { acChangesService };

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Services);
