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

class Home extends React.Component {
  render() {
    return (
      <React.Fragment>
        {/* Main Banner */}
        <Banner />
        {/* Features Area */}
        <FeaturesTwo />
        {/* Vertical line */}
        <SeperatedBar />
        {/* About Area */}
        <About Drake={true} />
        {/* Vertical line */}
        <SeperatedBar />
        {/* Services Area */}
        <Services />
        {/* Vertical line */}
        <SeperatedBar />
        {/* Project Area */}
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
        <Contact />
        {/* Footer Area */}
        <Footer />
      </React.Fragment>
    );
  }
}

export default Home;
