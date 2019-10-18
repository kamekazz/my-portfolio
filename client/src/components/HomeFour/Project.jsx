import React from "react";
import { Link } from "react-router-dom";
import OwlCarousel from "react-owl-carousel3";

import { projects } from "../../assets/Data/Project";

const options = {
  loop: true,
  nav: false,
  dots: true,
  smartSpeed: 2000,
  margin: 30,
  autoplayHoverPause: true,
  autoplay: true,
  responsive: {
    0: {
      items: 1
    },
    576: {
      items: 2
    },
    786: {
      items: 2
    },
    1200: {
      items: 4
    }
  }
};

class Project extends React.Component {
  render() {
    return (
      <section
        id="project"
        className="project-area uk-dark uk-project uk-section"
      >
        <div className="uk-container">
          <div className="uk-section-title section-title">
            <span>My Projects</span>
            <h2>Recent Projects</h2>
            <div className="bar"></div>

            {/* <Link to="#" className="uk-button uk-button-default">
              All Projects
            </Link> */}
          </div>
        </div>

        <OwlCarousel
          className="project-slides owl-carousel owl-theme"
          {...options}
        >
          {projects.map(project => (
            <div key={project.img} className="single-project">
              <Link to="#" className="project-img">
                <img
                  src={project.img}
                  alt="Project"
                  height="250px"
                  width="250px"
                />
              </Link>

              <div className="project-content">
                <h3>
                  <Link to="#">{project.title}</Link>
                </h3>
                <ul>
                  <li>
                    <Link to="#">{project.type}</Link>
                  </li>
                </ul>
              </div>
            </div>
          ))}
        </OwlCarousel>
      </section>
    );
  }
}

export default Project;
