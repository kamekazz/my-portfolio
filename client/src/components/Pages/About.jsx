import React from "react";
import Footer from "../Common/Footer";
import Banner from "../About/Banner";
import AboutContent from "../About/AboutContent";

class About extends React.Component {
  render() {
    return (
      <React.Fragment>
        <Banner />
        <AboutContent />
        <Footer />
      </React.Fragment>
    );
  }
}

export default About;
