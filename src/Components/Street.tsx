import React from "react";
import styled from "styled-components";
import { StreetStylesProps } from "../../interfaces";
import TrafficLight from "./TrafficLight";

const Street: React.FC<StreetStylesProps> = ({ $rotate }) => {
  return (
    <StreetStyles $rotate={$rotate}>
      <TrafficLight $rotate={$rotate} />
      <TrafficLight $rotate={$rotate} />
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
  transform: ${(props) => (props.$rotate ? "rotate(90deg)" : "rotate(0deg)")};
  z-index: ${(props) => (props.$rotate ? "0" : "1")};
  position: absolute;
  left: 50%;
`;
