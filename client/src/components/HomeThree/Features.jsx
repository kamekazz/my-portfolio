import React from 'react';
import dot from '../../assets/images/dot.png';
import whiteDot from '../../assets/images/white-dot.png';
 
class Features extends React.Component {
    render(){
        return (
            <section className="uk-features uk-dark features-area">
                <div className="uk-container">
                    <div className="uk-grid uk-grid-match uk-grid-medium uk-child-width-1-3@m">
                        <div className="uk-item">
                            <div className="single-features-box">
                                <div className="icon">
                                    <i className="flaticon-mail"></i>
                                </div>
                                <h3>Email Marketing</h3>
                                <div className="bar"></div>
                                <p>Risus commodo maecenas accumsan lacus vel facilisis. Lorem ipsum dolor consectetur adipiscing elit.</p>

                                <div className="dot-img">
                                    <img src={dot} alt="dot" className="color-dot" />
                                    <img src={whiteDot} alt="dot" className="white-dot" />
                                </div>
                            </div>
                        </div>

                        <div className="uk-item">
                            <div className="single-features-box active">
                                <div className="icon">
                                    <i className="flaticon-targeting"></i>
                                </div>
                                <h3>Market Analysis</h3>
                                <div className="bar"></div>
                                <p>Risus commodo maecenas accumsan lacus vel facilisis. Lorem ipsum dolor consectetur adipiscing elit.</p>

                                <div className="dot-img">
                                    <img src={dot} alt="dot" className="color-dot" />
                                    <img src={whiteDot} alt="dot" className="white-dot" />
                                </div>
                            </div>
                        </div>

                        <div className="uk-item">
                            <div className="single-features-box">
                                <div className="icon">
                                    <i className="flaticon-magnifying-glass"></i>
                                </div>
                                <h3>Keyword Research</h3>
                                <div className="bar"></div>
                                <p>Risus commodo maecenas accumsan lacus vel facilisis. Lorem ipsum dolor consectetur adipiscing elit.</p>

                                <div className="dot-img">
                                    <img src={dot} alt="dot" className="color-dot" />
                                    <img src={whiteDot} alt="dot" className="white-dot" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}
 
export default Features;