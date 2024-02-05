import { useState } from "react";

function App(props) {
  const [state, setState] = useState({ msj: "" });

  const handleClick = () => {
    setState({ msj: "(from changed state)" });
  };

  return (
    <>
      <h1>Hello {props.tituloProps} {state.msj}</h1>
      <button onClick={handleClick}>Click me</button>
    </>
  );
}

export default App;
