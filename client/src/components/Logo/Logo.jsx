import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { useSpring, animated } from "react-spring";

const LogoDivEl = styled(animated.div)`
  height: 41px;
  width: 270px;
  overflow: hidden;
`;

const TestEl = styled.h2`
  margin: 0px;
  font-weight: 800;
  cursor: pointer;
`;

const FestLetterEl = styled(animated.span)`
  color: #61dafb;
`;

const MEl = styled(FestLetterEl)``;
const TEl = styled(FestLetterEl)`
  transform: translate3d(500px, 0, 0);
`;
const NameEl = styled(animated.span)``;
const LastEl = styled(animated.span)``;

const Logo = () => {
  const [isAnimated, setIsAnimate] = useState(true);
  const fade = useSpring({
    from: {
      opacity: 0
    },
    to: {
      opacity: 1
    },
    config: {
      mass: 28
    }
  });
  const sparedAnimation = useSpring({
    opacity: isAnimated ? 1 : 0,
    fontSize: isAnimated ? "25px" : "0px"
  });
  const animationForT = useSpring({
    color: isAnimated ? "#61dafb" : "white"
  });

  useEffect(() => {
    setTimeout(() => {
      setIsAnimate(false);
    }, 2000);
  }, []);

  return (
    <LogoDivEl style={fade}>
      <TestEl
        onMouseEnter={() => setIsAnimate(true)}
        onMouseLeave={() => setIsAnimate(false)}
      >
        <MEl>M</MEl>
        <NameEl style={sparedAnimation}>anuel</NameEl>
        <TEl style={animationForT}>T</TEl>
        <LastEl style={sparedAnimation}>averas</LastEl>
      </TestEl>
    </LogoDivEl>
  );
};

export default Logo;
