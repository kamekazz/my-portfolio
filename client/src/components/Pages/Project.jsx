import React from 'react';
import NavigationFour from '../Navigation/NavigationFour';
import Footer from '../Common/Footer';
import Banner from '../Projects/Banner';
import ProjectContent from '../Projects/ProjectContent';
 
class Projects extends React.Component {
    render(){
        return (
            <React.Fragment>
                <NavigationFour />
                <Banner />
                <ProjectContent />
                <Footer />
            </React.Fragment>
        );
    }
}
 
export default Projects;