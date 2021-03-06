import React, { Component } from "react";
import axios from "axios";

import InputPrompt from "./InputPrompt";
import ButtonGroup from "./ButtonGroup";

/*
      The Sassy CSS this CSS file comes from is purely for illustrative purposes to show
      knowledge of Sassy CSS. In a real React app, I'd just create a styles object for each styled 
      component and style each component inline, as is recommended by Facebook for true component modularity.
*/

import "../styles/CalculusApp.css";

function Result(props) {
  return (
    <div>
      <p>The result of your operation is: <span>{props.result}</span></p>

      <ButtonGroup values={["Simplify", "Factor"]}
                   operation="manip"
                   onClick={props.onClick} />
    </div>
  );
}

function CalculusApp(props) {
  return (
    <div className="app">
      <h1>Single-Variable Calculus, the App!</h1>

      <strong>
        Heads up: this app requires standard mathematical typing conventions, such as ^ for exponents (2^2 for 2 squared) and inline fractions (1/2).
      </strong>

      <InputPrompt onChange={props.onChange}
                   onClick={props.onClick} />

      <Result result={props.result}
              onClick={props.onClick} />
    </div>
  );
}

export default class CalculusAppContainer extends Component {
  constructor() {
    super();
    this.state = {
      expression: "",
      result: ""
    }
  }

  handleChange(event) {
    this.setState({
      expression: event.target.value
    });
  }

  handleClick(event) {
    const selectedElement = event.target;
    selectedElement.blur();

    let operation = selectedElement.textContent.toLowerCase(),
        expression = selectedElement.dataset.operation === "calc" ? this.state.expression : this.state.result;

    if(selectedElement.dataset.operation === "calc" && expression === "") {
      alert("You must type in an algebraic expression to evaluate.");
      return;
    } else if(selectedElement.dataset.operation === "manip" && expression === "") {
      alert("There is no result to simplify or factor.");
      return;
    }

    if(operation === "differentiate") {     //api (incorrectly) uses the term derive instead of differentiate
      operation = "derive";
    }

    expression = expression.replace(/\//, "%2F");   //switch slash with url encoding to be able to use expressions with fractions

    this.handleRequest(operation, expression);
  }

  handleRequest(operation, expression) {
    axios.get("https://newton.now.sh/" + operation + "/" + expression)
         .then(
            response => this.handleSuccess(response)
          )
         .catch(
            error => this.handleError(error, expression)
          );
  }

  handleSuccess(response) {
    this.setState({
      result: response.data.result
    });
  }

  handleError(error, expression) {
    let errorMsg = "";

    switch(error.response.status) {
      case 0:
        errorMsg = "You did not connect.\n Verify your connection to the Internet.";
        break;
      case 404:
        errorMsg = "Requested page not found. [404]";
        break;
      case 500:
        errorMsg = "Internal Server Error [500].";
        break;
      default:
        errorMsg = "Unexpected error.\n" + JSON.stringify(error.response.status);
    }

    alert(errorMsg);
  }
  
  render() {
    return <CalculusApp onChange={event => this.handleChange(event)}
                        onClick={event => this.handleClick(event)}
                        result={this.state.result} />;
  }
}