import React from 'react';
import NavigationFour from '../Navigation/NavigationFour';
import Footer from '../Common/Footer';
import Banner from '../Testimonials/Banner';
import TestiContent from '../Testimonials/TestiContent';
 
class Testimonials extends React.Component {
    render(){
        return (
            <React.Fragment>
                <NavigationFour />
                <Banner />
                <TestiContent />
                <Footer />
            </React.Fragment>
        );
    }
}
 
export default Testimonials;