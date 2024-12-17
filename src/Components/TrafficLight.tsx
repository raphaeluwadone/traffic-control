import React from "react";
import styled from "styled-components";
import { StreetStylesProps, TrafficLightState } from "../utils";

const TrafficLight: React.FC<StreetStylesProps> = ({ $rotate, $state }) => {
  return (
    <TrafficStyles $rotate={$rotate}>
      <Red $state={$state} />
      <Yellow $state={$state} />
      <Green $state={$state} />
    </TrafficStyles>
  );
};

export default TrafficLight;

const TrafficStyles = styled.div<StreetStylesProps>`
  height: 180px;
  width: 70px;
  background-color: orange;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  padding: 3px 0;
  border-radius: 10px;
  transform: ${(props) => (props.$rotate ? "rotate(270deg)" : "rotate(0deg)")};
`;

const TrafficLightStyles = styled.div`
  height: 50px;
  width: 50px;
  background-color: red;
  border-radius: 50%;
`;

const Red = styled(TrafficLightStyles)<StreetStylesProps>`
  background-color: ${(props) =>
    props.$state === TrafficLightState.RED ? "red" : "#818589"};
`;

const Yellow = styled(TrafficLightStyles)<StreetStylesProps>`
  background-color: ${(props) =>
    props.$state === TrafficLightState.YELLOW ? "yellow" : "#818589"};
`;

const Green = styled(TrafficLightStyles)<StreetStylesProps>`
  background-color: ${(props) =>
    props.$state === TrafficLightState.GREEN ? "green" : "#818589"};
`;
