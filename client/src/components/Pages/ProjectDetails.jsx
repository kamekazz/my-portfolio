import React from "react";
import { Link } from "react-router-dom";
import NavigationFour from "../Navigation/NavigationFour";
import Footer from "../Common/Footer";
import { connect } from "react-redux";
import { acSetUrl } from "../../redux/Tools/actions";
import { projects } from "../../assets/Data/Project";

class ProjectDetails extends React.Component {
  state = {
    live: 0,
    total: 0,
    down: 0,
    up: 0
  };
  componentDidMount() {
    this.props.acSetUrl(false);
    this.setState({
      total: projects.length - 1,
      live: Number(this.props.match.params.id),
      up: Number(this.props.match.params.id) + 1,
      down: Number(this.props.match.params.id) - 1
    });
  }

  render() {
    const project = projects[this.props.match.params.id];
    const { down, up, total, live } = this.state;

    return (
      <React.Fragment>
        <NavigationFour />
        {/* <!-- Start Page Title Area --> */}
        <section className="page-title-area uk-page-title">
          <div className="uk-container">
            <h1>Project Details</h1>
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>Project Details</li>
            </ul>
          </div>
        </section>
        {/* <!-- End Page Title Area --> */}

        {/* <!-- Start Project Details Area --> */}
        <section className="project-details-area uk-project-details uk-section">
          <div className="uk-container">
            <div className="uk-grid uk-flex project-details">
              <div className="project-details-img uk-width-expand">
                <img src={project.imgBig[0]} alt="project" />
              </div>

              <div className="item uk-width-1-5">
                <div className="project-details-info">
                  <ul>
                    <li>
                      <span>Customer Name:</span>
                      {project.customer}
                    </li>
                    <li>
                      <span>Category:</span>{" "}
                      {project.category.map(cate => cate)}
                    </li>
                    <li>
                      <span>Date:</span>
                      {project.date}
                    </li>
                    <li>
                      <span>Status:</span> In Process
                    </li>
                    <li>
                      <span>Demo Link:</span>{" "}
                      <a href={project.demo} target="_blank">
                        www.{project.demoName}
                      </a>
                    </li>
                    <li>
                      <span>Tags:</span>
                      {project.tec.map(tag => (
                        <>
                          <Link to="#">{tag}</Link>
                          {"   "}
                        </>
                      ))}
                    </li>
                    <li>
                      <span>Resources:</span>

                      <ul>
                        {project.lick.map(x => (
                          <li style={{ marginRight: "3px" }}>
                            <a href={x.link} target="_blank">
                              <i className={x.icon}></i>
                            </a>
                          </li>
                        ))}
                      </ul>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="project-details-desc">
              <h3>{project.title}</h3>
              <p>{project.description}</p>

              <blockquote className="blockquote">
                <p>{project.blockquote}</p>
              </blockquote>
            </div>

            <div className="project-next-and-prev">
              <div className="uk-grid uk-grid-match uk-grid-medium uk-child-width-1-2@m uk-child-width-1-2@s">
                <div className="item">
                  {live >= 1 && (
                    <a
                      href={`/project/${down}`}
                      className="uk-button uk-button-default"
                    >
                      Prev Project
                    </a>
                  )}
                </div>

                <div className="item uk-text-right">
                  {live < total && (
                    <a
                      href={`/project/${up}`}
                      className="uk-button uk-button-default"
                    >
                      Next Project
                    </a>
                  )}
                </div>
              </div>
            </div>
          </div>
        </section>
        <Footer />
      </React.Fragment>
    );
  }
}

const mapStateToProps = state => ({});

const mapDispatchToProps = {
  acSetUrl
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ProjectDetails);
