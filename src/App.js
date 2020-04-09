// Convert the App component from a Class based component to a functional component

import React from "react";

// Instead of this
class App extends React.Component {
  render() {
    return <p>Hello Match Labs</p>;
  }
}
export default App;

// We will declare a const and store an arrow function inside it
/* const << nameOfOurComponent >> = ... */

// To render something, instead of the render() function from the Class component, simply return what you would like rendered
/* const component = () => {
     return << yourContent >>
 }
*/

// Last step export your component
// Hint: Look how we exported our App class component
