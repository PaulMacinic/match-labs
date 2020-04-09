import React from "react";

// This is a React class component
class App {
  render() {
    return <p>Hello Match Labs</p>;
  }
}

export default App;

// Convert the component from a Class based component to a functional component

// In order to do so, declare an arrow function and store in in a const
/* const component = your arrow function */

// To render something, instead of the render() function from the Class component, simply return what you would like rendered
const nameOfYourComponent = () => {
  /* return yourContent */
};

// Last step export your component
// Hint: Look how we exported our App class component
