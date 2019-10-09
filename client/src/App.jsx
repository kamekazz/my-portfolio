import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Preloader from "./components/Common/Preloader";
import Home from "./components/Pages/HomeFour";
import About from "./components/Pages/About";
import Services from "./components/Pages/Services";
import ServicesTwo from "./components/Pages/ServicesTwo";
import ServiceDetails from "./components/Pages/ServiceDetails";
import Project from "./components/Pages/Project";
import ProjectDetails from "./components/Pages/ProjectDetails";
import BlogDetails from "./components/Pages/BlogDetails";
import Testimonials from "./components/Pages/Testimonials";
import Team from "./components/Pages/Team";
import Blog from "./components/Pages/Blog";
import Contact from "./components/Pages/Contact";
import NavigationFour from "./components/Navigation/NavigationFour";
import { acLoadingPage } from "./redux/Tools/actions";

import { connect } from "react-redux";

class App extends React.Component {
  componentDidMount() {
    this.demoAsyncCall().then(() => this.props.acLoadingPage(false));
  }

  demoAsyncCall = () => {
    return new Promise(resolve => setTimeout(() => resolve(), 2000));
  };

  render() {
    console.log(this.props.loading);

    return (
      <>
        <Router>
          <React.Fragment>
            {this.props.loading ? <Preloader /> : <NavigationFour />}
            <Route path="/" exact component={Home} />
            <Route path="/about" exact component={About} />
            <Route path="/services" exact component={Services} />
            <Route path="/services-two" exact component={ServicesTwo} />
            <Route path="/service-details" exact component={ServiceDetails} />
            <Route path="/projects" exact component={Project} />
            <Route path="/project-details" exact component={ProjectDetails} />
            <Route path="/blog-details" exact component={BlogDetails} />
            <Route path="/testimonials" exact component={Testimonials} />
            <Route path="/team" exact component={Team} />
            <Route path="/blog" exact component={Blog} />
            <Route path="/contact" exact component={Contact} />
          </React.Fragment>
        </Router>
      </>
    );
  }
}

const mapStateToProps = state => ({
  loading: state.tools.loading
});

const mapDispatchToProps = { acLoadingPage };

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
