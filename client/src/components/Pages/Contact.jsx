import React from 'react';
import NavigationFour from '../Navigation/NavigationFour';
import Footer from '../Common/Footer';
import Banner from '../Contact/Banner';
import Contact from '../HomeTwo/Contact';

class ContactUs extends React.Component {
  render() {
    return (
      <React.Fragment>
        <NavigationFour />
        <Banner />
        <Contact />
        <Footer />
      </React.Fragment>
    );
  }
}

export default ContactUs;
