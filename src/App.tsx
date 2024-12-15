import React from "react";
import { Main, Parent } from "./Components/index.style";
import Street from "./Components/Street";

function App() {
  return (
    <Main>
      <Parent>
        <Street  />
        <Street $rotate />
      </Parent>
    </Main>
  );
}

export default App;
