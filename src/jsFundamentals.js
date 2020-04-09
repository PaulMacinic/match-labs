/* eslint-disable */

// Functions and the this keyword

// "use strict";

// function x() {
//   console.log(this);
// }
// x();

// const y = () => console.log(this);
// y();

// var vs let vs const

// for (var i = 0; i < 10; i++) {
//   console.log(i);
// }
// console.log(i);

// for (let i = 0; i < 10; i++) {
//   console.log(i);
// }
// console.log(i);

// for (const i = 0; i < 10; i++) {
//   console.log(i);
// }
// console.log(i);

// Strings in JS

// const x = "Javascript";
// const y = "React";
// const z = "but I hate Angular.";

//with concatenation
// console.log("I like " + x);
// console.log("I like " + x + y);
// console.log("I like " + x + y + z);

//with template literals
// console.log(`I like ${x}, ${y}, ${z}`);

// console.log(1 + "1");
// console.log("1" + 1);

// Array methods

// const arr = [1, 2, 3, 4];

// const x = arr.forEach(item => item);
// console.log(x);

// const y = arr.map(item => item);
// console.log(y);

// const z = arr.filter((item) => item !== 3);
// console.log(z);

// const a = arr.find((item) => item !== 3);
// console.log(a);

// Async/Await

// const apiUrl = "https://api.thecatapi.com/v1/images/search";

// fetch(apiUrl)
//   .then((response) => response.json())
//   .then((json) => console.log(json));
// console.log("This will be displayed before the data arrives");

// const fetchCats = async () => {
//   const res = await fetch(apiUrl);
//   const json = await res.json();
//   console.log(json);
//   console.log("This will be displayed after the data arrives");
// };
// fetchCats();

// Spreading

// const arr = ["I", "like", "JS"];
// console.log(arr);
// console.log(...arr);

// const arr2 = ["And", "I", "hate", "Angular"];
// console.log(...arr, ...arr2);

// const obj = { a: 1, b: 2 };
// const obj2 = { ...obj, c: 3 };
// console.log(obj2);

// Destructuring;

// const arr = ["Paul", 27, "Arad"];
// const name = arr[0];
// const age = arr[1];
// const birthPlace = arr[2];

// const [name, age, birthPlace] = arr;
// console.log(name, age, birthPlace);

// const obj = { name: "Paul", age: 27, birthPlace: "Arad" };
// const name = obj.name;
// const age = obj.age;
// const birthPlace = obj.birthPlace;

// const { name, age, birthPlace } = obj;
// console.log(name, age, birthPlace);

// const { name, ...rest } = obj;
// console.log(name, rest);
