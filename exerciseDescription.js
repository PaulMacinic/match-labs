// Now it's time to add dynamic data to our component

// 1. Modify the <PageTitle/> component so that it accepts 2 props, fontSize and color

// 2.  In your component add those props as the values of some inline style rules
// This is how you use inline styles in React
/* style={{cssProperty:<< value >>, anotherCssProperty:<< value >>}} */

/* <h1 style={{fontSize:"<< value of prop >>"}}></h1> */

// 3. In the end, you should be able to supply your component with the data through props and it should render it as style values
/* <PageTitle fontSize={...} color={...}/> */

// Attention! Make sure the fontSize prop is passed as an int, while the color is passed as a string
/* fontSize={25} color={"#BADa55"} */
