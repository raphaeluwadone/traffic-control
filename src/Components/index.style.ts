import styled from "styled-components";
import { StreetStylesProps } from "../utils";

export const Main = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 20px 0;
`;

export const Parent = styled.div`
  width: 900px;
  height: 900px;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Emoji = styled.span<StreetStylesProps>`
  font-size: 2em;
  display: inline-block;
  margin: ${(props) => (props.$rotate ? "0 0" : " 50px 20px")};
  transform: ${(props) => (props.$rotate ? "rotate(270deg)" : "rotate(0deg)")};
`;

export const Controls = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  flex-direction: column;
  position: relative;
  z-index: 4;
  transform: translateX(130%);
`;
