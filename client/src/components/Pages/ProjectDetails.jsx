import React from "react";
import { Link } from "react-router-dom";
import NavigationFour from "../Navigation/NavigationFour";
import projectImg from "../../assets/images/project-details.jpg";
import Footer from "../Common/Footer";
import { connect } from "react-redux";
import { acSetUrl } from "../../redux/Tools/actions";
import { projects } from "../../assets/Data/Project";

class ProjectDetails extends React.Component {
  state = {
    total: 0,
    back: true,
    live: 0
  };
  componentDidMount() {
    const numberLive = Number(this.props.match.params.id);
    this.props.acSetUrl(false);
    this.setState({ total: projects.length });
    this.setState({ live: numberLive });
    this.checkFestProject();
  }
  componentDidUpdate() {}
  checkFestProject = () => {
    if (this.props.match.params.id === 0) {
      this.setState({ back: false });
    }
  };
  render() {
    const { total, live, back } = this.state;
    const project = projects[this.props.match.params.id];

    const checkLengthProject = () => {
      let plus = live + 1;
      if (true) {
        return (
          <Link to={`/project/${plus}`} className="uk-button uk-button-default">
            Next Project
          </Link>
        );
      }
    };

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
                <img src={project.img} alt="project" />
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
                {back && (
                  <div className="item">
                    <Link
                      to={`/project/${this.props.match.params.id - 1}`}
                      className="uk-button uk-button-default"
                    >
                      Prev Project
                    </Link>
                  </div>
                )}
                <div className="item uk-text-right">{checkLengthProject()}</div>
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
