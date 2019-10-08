import React, { useState } from "react";
import styled from "styled-components";
import { useSpring, animated } from "react-spring";

const LogoDivEl = styled(animated.div)`
  position: relative;
  height: 41px;
  width: 260px;
  overflow: hidden;
`;

const TestEl = styled.h2`
  position: absolute;
  margin: 0px;
  font-weight: 800;
  cursor: pointer;
`;

const FestLetterEl = styled.span`
  color: #61dafb;
`;

const MEl = styled(FestLetterEl)``;
const TEl = styled(FestLetterEl)``;
const NameEl = styled.span``;
const LastEl = styled.span``;

const Logo = () => {
  const [isToggle, setIsToggle] = useState(false);
  const [isAnimated, setIsAnimate] = useState(false);
  const fade = useSpring({
    opacity: isToggle ? 1 : 0
  });
  return (
    <LogoDivEl style={fade}>
      <TestEl onMouseEnter={() => setIsToggle(!isToggle)}>
        <MEl>M</MEl>
        <NameEl>anuel</NameEl>
        <TEl>T</TEl>
        <LastEl>averas</LastEl>
      </TestEl>
    </LogoDivEl>
  );
};

export default Logo;
