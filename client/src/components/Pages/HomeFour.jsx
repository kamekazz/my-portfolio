import React from "react";
import Banner from "../HomeFour/Banner";
import FeaturesTwo from "../HomeFour/FeaturesTwo";
import SeperatedBar from "../Common/SeperatedBar";
import About from "../About/AboutContent";
import Services from "../HomeFour/Services";
import Project from "../HomeFour/Project";
// import PartnerLogo from "../HomeFour/PartnerLogo";
import Contact from "../Common/Contact";
import Footer from "../Common/Footer";
import { Waypoint } from "react-waypoint";
import { connect } from "react-redux";
import { acSetSection } from "../../redux/Tools/actions";

class Home extends React.Component {
  addWayPoint = text => {
    this.props.acSetSection(text);
  };
  render() {
    return (
      <React.Fragment>
        {/* Main Banner */}
        <Waypoint onEnter={() => this.addWayPoint("home")} />
        <Banner />

        {/* Features Area */}
        <FeaturesTwo />
        {/* Vertical line */}
        <SeperatedBar />
        {/* About Area */}
        <Waypoint onEnter={() => this.addWayPoint("about")} />
        <About Drake={true} />
        {/* Vertical line */}
        <SeperatedBar />
        {/* Services Area */}
        <Waypoint onEnter={() => this.addWayPoint("services")} />
        <Services />
        {/* Vertical line */}
        <SeperatedBar />
        {/* Project Area */}
        <Waypoint onEnter={() => this.addWayPoint("project")} />
        <Project />
        {/* Vertical line */}
        {/* <SeperatedBar /> */}
        {/* Feedback Area */}
        {/* <Testimonials /> */}
        {/* Partner Area */}
        {/* <PartnerLogo /> */}
        {/* Team Area */}
        {/* <Team /> */}
        {/* Subscribe Area */}
        {/* <Newsletter /> */}
        {/* Blog Area */}
        {/* <LatestNews /> */}
        {/* Vertical line */}
        <SeperatedBar />
        {/* Contact Area */}
        <Waypoint onEnter={() => this.addWayPoint("contact")} />
        <Contact />
        {/* Footer Area */}
        <Footer />
      </React.Fragment>
    );
  }
}

const mapStateToProps = state => ({});

const mapDispatchToProps = { acSetSection };

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Home);
