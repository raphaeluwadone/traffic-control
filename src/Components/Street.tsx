import React from "react";
import styled from "styled-components";
import { StreetStylesProps, TrafficLightState } from "../utils";
import TrafficLight from "./TrafficLight";
import { Emoji } from "./index.style";

const Street: React.FC<StreetStylesProps> = ({
  $rotate,
  $state,
}) => {

  return (
    <StreetStyles $rotate={$rotate}>
      <div>
        <TrafficLight $rotate={$rotate} $state={$state} />
        {$state === TrafficLightState.RED ? (
          <Emoji $rotate={$rotate}>&#128095;</Emoji>
        ) : (
          <Emoji $rotate={$rotate}>&#9995;</Emoji>
        )}
      </div>
      <div>
        {$state === TrafficLightState.RED ? (
          <Emoji $rotate={$rotate}>&#128095;</Emoji>
        ) : (
          <Emoji $rotate={$rotate}>&#9995;</Emoji>
        )}
        <TrafficLight $rotate={$rotate} $state={$state} />
      </div>
    </StreetStyles>
  );
};

export default Street;

const StreetStyles = styled.div<StreetStylesProps>`
  background-color: #282c34;
  width: 200px;
  height: 900px;
  display: flex;
  color: #fff;
  justify-content: space-between;
  align-items: center;
  flex-direction: column;
  padding: ${(props) => (props.$rotate ? "0" : "20px 0")};
  transform: ${(props) => (props.$rotate ? "rotate(90deg)" : "rotate(0deg)")};
  z-index: ${(props) => (props.$rotate ? "0" : "1")};
  position: absolute;
  left: 50%;
`;
