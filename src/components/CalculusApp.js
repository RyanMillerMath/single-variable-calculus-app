import React, { Component } from "react";

/*
      The Sassy CSS this CSS file comes from is purely for illustrative purposes to show
      knowledge of Sassy CSS. In a real React app, I'd add create a styles object for each styled 
      component and style each component inline, as is recommended by Facebook for true component modularity.
*/

import "../styles/CalculusApp.css";

function FormLabel() {
  return(
    <label>
      Please type in a function:&nbsp;
      <input />
    </label>
  );
}

function CalculateButton(props) {
  return (
    <input className="button calcButton" type="submit" value={props.operation} />
  );
}

function InputPrompt(){
  return (
    <form>
      <FormLabel className="formLabel" />

      <div>
        <CalculateButton operation="Differentiate" />
        <CalculateButton operation="Integrate" />
      </div>
    </form>
  )
}

function AlgebraicManipulationButton(props) {
  return(
    <button className="button manipButton">{props.manipulationType}</button>
  );
}

function Result(props) {
  return (
    <div className="result">
      <p>The result of your operation is: <span>{props.result}</span></p>

      <div>
        <AlgebraicManipulationButton manipulationType="Simplify" />
        <AlgebraicManipulationButton manipulationType="Factor" />
      </div>
    </div>
  );
}

class CalculusApp extends Component {
  render() {
    return (
      <div className="app">
        <h1>Single-Variable Calculus, the App!</h1>

        <InputPrompt />

        <Result result="sample result" />
      </div>
    );
  }
}

export default CalculusApp;