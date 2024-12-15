import React from 'react'
import styled from 'styled-components'
import { StreetStylesProps } from "../../interfaces";

const TrafficLight: React.FC<StreetStylesProps> = ({ $rotate}) => {
  return <TrafficStyles $rotate={$rotate}>
    <Red />
    <Yellow />
    <Green />
  </TrafficStyles>;
}

export default TrafficLight

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

const Red = styled(TrafficLightStyles)`
  background-color: red;
`;

const Yellow = styled(TrafficLightStyles)`
  background-color: yellow;
`;  

const Green = styled(TrafficLightStyles)`
  background-color: green;
`;