//todo Exercise

//todo 1. Create a fetchCats arrow function

//todo 2. Perform a fetch request to the following link inside the fetchCast func.
//! Remember the async/await keywords
//* https://api.thecatapi.com/v1/images/search?limit=9&mime_types=&order=Random&size=small

//todo 3. Await for the res, and then transform the res with .json()
//! both fetch() and .json() are async functions so you will need to await

//todo 4. Map through the results and for each object, call the insertCat() function bellow providing the object.url

// Write your code here

const insertCat = (catUrl) => {
  // Don't pay attention this function, just call it and provide it a catUrl
  if (catUrl) {
    const img = document.createElement("img");
    img.src = catUrl;
    document.querySelector("body").appendChild(img);
  }
};

//todo Exercise2

//todo 1. Take the insertCat() function and put it in a separate file called services
//todo 2. Export the insertCat() function using a named export
//todo 3. Import the insertCat() function in this file and use it our async function
