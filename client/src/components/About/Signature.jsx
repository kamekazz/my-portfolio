import React from "react";
import { useSpring, animated } from "react-spring";
import styled from "styled-components";

const TilledEl = styled(animated.img)`
  background: grey;
  box-shadow: 0px 10px 30px -5px rgba(0, 0, 0, 0.3);
  transition: box-shadow 0.5s;
  will-change: transform;
  &:hover {
    box-shadow: 0px 30px 100px -10px rgba(0, 0, 0, 0.4);
    cursor: pointer;
  }
`;

const calc = (x, y) => [
  -(y - window.innerHeight / 2) / 20,
  (x - window.innerWidth / 2) / 20,
  1.1
];
const trans = (x, y, s) =>
  `perspective(1400px) rotateX(${x}deg) rotateY(${y}deg) scale(${s})`;

function Signature() {
  const [props, set] = useSpring(() => ({
    xys: [0, 0, 1],
    config: { mass: 5, tension: 350, friction: 40 }
  }));
  return (
    <TilledEl
      src={require("../../assets/images/signature.png")}
      alt="signature"
      style={{ transform: props.xys.interpolate(trans) }}
    />
  );
}

export default Signature;
