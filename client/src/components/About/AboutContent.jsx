import React, { useState } from "react";
import { useGesture } from "react-with-gesture";
import styled from "styled-components";
import { animated, useSpring } from "react-spring";
import Signature from "./Signature";
import AboutImgOne from "./AboutImgOne";
import one from "../../assets/images/1.png";

const CirceEl = styled(animated.img)`
  filter: saturate(0.5) brightness(190%) hue-rotate(157deg);
  position: absolute;
  right: 0;
  bottom: 20px;
  &:hover {
    cursor: pointer;
  }
  @media (max-width: 1200px) {
    right: -125px;
    bottom: 20px;
  }
  @media (max-width: 1200px) {
    right: 33px;
    bottom: -62px;
  }
  @media (max-width: 1100px) {
    right: -101px;
    bottom: 72px;
  }
  @media (max-width: 900px) {
    right: 33px;
    bottom: -62px;
    opacity: 0.5;
  }
  @media (max-width: 400px) {
    display: none;
  }
`;
const TittleEl = styled.h2``;

const AboutContent = () => {
  const [{ xy }, set] = useSpring(() => ({ xy: [0, 0] }));

  const bind = useGesture(({ down, delta }) => {
    set({ xy: down ? delta : [0, 0] });
  });

  return (
    <section className="uk-about about-area uk-section">
      <div className="uk-container">
        <div className="uk-grid uk-grid-match uk-grid-medium uk-child-width-1-2@m uk-child-width-1-1@s">
          <div className="item">
            <div className="about-content">
              <div className="uk-section-title section-title">
                <span>About Me</span>
                <TittleEl>Leading the way in Digital Solutions</TittleEl>
                <CirceEl
                  style={{
                    transform: xy.interpolate(
                      (x, y) => `translate3d(${x}px,${y}px,0)`
                    )
                  }}
                  {...bind()}
                  src={require("../../assets/images/1.png")}
                  alt="shape"
                />
                <div className="bar"></div>
              </div>

              <div className="about-text">
                <div className="icon">
                  <i className="flaticon-quality"></i>
                </div>
                <h3>The Most Impressive React Developer In The World</h3>
                <p>
                  React JS UI developer with a 4 years of experience building
                  high performing presentation layers, building reusable
                  components, and performance optimization.
                </p>
                <p>
                  I have learned many things that only experience can teach. I
                  not only create apps but help clients solve their problems
                </p>
                <p>
                  I also create websites to complement the Already existing DB,
                  administration & dashboards. So, if you want really creative,
                  complex apps that are architecturally strong - I am the Dev
                  for you!!
                </p>

                {/* <img
                    src={require("../../assets/images/signature.png")}
                    alt="signature"
                  /> */}
                <Signature />
              </div>
            </div>
          </div>

          <div className="item">
            <div className="about-img">
              <img
                src={require("../../assets/images/about1.jpg")}
                className="about-img1"
                alt="about-img"
              />
              <AboutImgOne />
              {/* <img
                src={require("../../assets/images/about2.jpg")}
                className="about-img2"
                alt="about-img"
              /> */}
              <img src={one} className="shape-img" alt="shape" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutContent;
