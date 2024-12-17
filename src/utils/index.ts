export interface StreetStylesProps {
  $rotate?: boolean;
  children?: React.ReactNode;
  $state?: TrafficLightState;
}


export enum TrafficLightState {
  RED = "red",
  YELLOW = "yellow",
  GREEN = "green",
}