import React from 'react';
import NavigationFour from '../Navigation/NavigationFour';
import Footer from '../Common/Footer';
import Banner from '../Services/Banner';
import ServiceTwoContent from '../Services/ServiceTwoContent';
 
class ServicesTwo extends React.Component {
    render(){
        return (
            <React.Fragment>
                <NavigationFour />
                <Banner />
                <ServiceTwoContent />
                <Footer />
            </React.Fragment>
        );
    }
}
 
export default ServicesTwo;