import React, { useEffect, useRef, useState } from "react";
import { Controls, Main, Parent } from "./Components/index.style";
import Street from "./Components/Street";
import Button from "./Components/Button";
import { TrafficLightState } from "./utils";

function App() {
  const [streetAState, setStreetAState] = useState<TrafficLightState>(
    TrafficLightState.GREEN
  );
  const [streetBState, setStreetBState] = useState<TrafficLightState>(
    TrafficLightState.RED
  );

  const intervalRef = useRef<number | null>(null);
  const [start, setStart] = useState<boolean>(false);
  const [, setCycle] = useState(0);
  const [nextInterval, setNextInterval] = useState(10000);

  const startCycle = () => {
    if (start) return;
    setStart(true);
    startTrafficCycle(0);
  };

  const resetSystem = () => {
    clearInterval(intervalRef.current!);
    setStreetAState(TrafficLightState.GREEN);
    setStreetBState(TrafficLightState.RED); 
    setStart(false); 
  };

  const startTrafficCycle = (currentCycle: number) => {
    // let cyclePhase = 0; // 0 = streetA GREEN, 1 = Both YELLOW, 2 = B GREEN, 3 = A+B YELLOW
    console.log("Cycle started", streetAState, streetBState, currentCycle);
    // intervalRef.current = window.setInterval(() => {
    switch (currentCycle) {
      case 0: // Street A GREEN, Street B RED
        console.log("first");
        setStreetAState(TrafficLightState.GREEN);
        setStreetBState(TrafficLightState.RED);
        break;
      case 1: // Both YELLOW
        console.log("second");
        setStreetAState(TrafficLightState.YELLOW);
        setStreetBState(TrafficLightState.YELLOW);
        break;
      case 2: // Street B GREEN, Street A RED
        console.log("Third");
        setStreetAState(TrafficLightState.RED);
        setStreetBState(TrafficLightState.GREEN);
        break;
      case 3: // Both YELLOW
        console.log("fourth");
        setStreetAState(TrafficLightState.YELLOW);
        setStreetBState(TrafficLightState.YELLOW);
        break;
    }

    // const cyclePhase = (cycle + 1) % 4;
    const nextCycle = (currentCycle + 1) % 4;
    setCycle(nextCycle);

    let interval = 10000;
    if (nextCycle === 1 || nextCycle === 3) {
      interval = 5000;
    }
    setNextInterval(interval);

    clearInterval(intervalRef.current!);
    intervalRef.current = window.setInterval(
      () => startTrafficCycle(nextCycle),
      nextInterval
    );
    // }, 10000);
  };



  useEffect(() => {
    return () => clearInterval(intervalRef.current!);
  }, []);

  return (
    <Main>
      <Parent>
        <Street $state={streetAState} />
        <Controls>
          <Button onClick={() => startCycle()}>Start</Button>
          <Button onClick={() => resetSystem()}>Reset</Button>
        </Controls>
        <Street $rotate $state={streetBState} />
      </Parent>
    </Main>
  );
}

export default App;
