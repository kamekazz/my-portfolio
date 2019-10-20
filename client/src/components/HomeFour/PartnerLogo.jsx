import React from "react";
import OwlCarousel from "react-owl-carousel3";
import partnerWhiteOne from "../../assets/images/partner-white-one.png";
import partnerWhiteTwo from "../../assets/images/partner-white-two.png";
import partnerWhiteThree from "../../assets/images/partner-white-three.png";
import partnerWhiteFour from "../../assets/images/partner-white-four.png";
import partnerWhiteFive from "../../assets/images/partner-white-five.png";
import partnerWhiteSix from "../../assets/images/partner-white-six.png";

const options = {
  loop: true,
  nav: false,
  dots: false,
  smartSpeed: 2000,
  margin: 30,
  autoplayHoverPause: true,
  autoplay: true,
  navText: ["<i class='flaticon-back'></i>", "<i class='flaticon-right'></i>"],
  responsive: {
    0: {
      items: 2
    },
    576: {
      items: 3
    },
    768: {
      items: 4
    },
    1200: {
      items: 6
    }
  }
};

const logoArray = [
  {
    img:
      "https://res.cloudinary.com/dujqdfwzi/image/upload/c_scale,h_70,w_175/v1571531827/logo/react_js.png",
    a: "https://reactjs.org/"
  },
  {
    img:
      "https://res.cloudinary.com/dujqdfwzi/image/upload/c_scale,h_70,w_180/v1571532395/logo/68747470733a2f2f7261696c73776172652e636f6d2f626c6f672f77702d636f6e74656e742f75706c6f6164732f323031382f30392f32343030254431253835313236302d72772d626c6f672d6e6f64652d6a732e706e67.png",
    a: "https://nodejs.org/en/"
  },
  {
    img:
      "https://res.cloudinary.com/dujqdfwzi/image/upload/c_scale,h_70,w_180/v1571532085/logo/1_R69Gbax0_W7OJ61UPhohxw.png",
    a: "https://angular.io/"
  },
  {
    img:
      "https://res.cloudinary.com/dujqdfwzi/image/upload/c_scale,h_70,w_180/v1571532588/logo/material.png",
    a: "https://material-ui.com"
  },
  {
    img:
      "https://res.cloudinary.com/dujqdfwzi/image/upload/c_scale,h_70,w_180/v1571532585/logo/styledcomponents1.png",
    a: "https://www.styled-components.com/"
  },
  {
    img:
      "https://res.cloudinary.com/dujqdfwzi/image/upload/c_scale,h_70,w_180/v1571532580/logo/share.jpg",
    a: "https://www.react-spring.io/"
  },
  {
    img:
      "https://res.cloudinary.com/dujqdfwzi/image/upload/c_scale,h_70,w_180/v1571532583/logo/bootstrap-social.png",
    a: "https://getbootstrap.com/2.3.2/components.html"
  },
  {
    img:
      "https://res.cloudinary.com/dujqdfwzi/image/upload/c_scale,h_70,w_180/v1571533281/logo/download.png",
    a: "https://sass-lang.com/documentation/syntax"
  },
  {
    img:
      "https://res.cloudinary.com/dujqdfwzi/image/upload/c_scale,h_70,w_180/v1571532663/logo/firebace.png",
    a: "https://firebase.google.com/"
  }
];

class PartnerLogo extends React.Component {
  render() {
    return (
      <div className="partner-area uk-section uk-dark uk-padding-remove-top">
        <div className="uk-container">
          {/* <div className="partner-slides owl-carousel owl-theme"> */}
          <OwlCarousel
            className="partner-slides owl-carousel owl-theme"
            {...options}
          >
            {logoArray.map(logo => (
              <div className="item">
                <a href={logo.a} target="_blank">
                  <img src={logo.img} alt="Partner" />
                </a>
              </div>
            ))}
          </OwlCarousel>
          {/* </div> */}
        </div>
      </div>
    );
  }
}

export default PartnerLogo;
