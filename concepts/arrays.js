console.log("ARRAYS - variables that hold multiple values");

// Instantiate an array
let fruits = ["apples", "oranges", "pears", "grapes", "bananas"];
//              0          1         2        3         4 

// can be of multiple types:
// let fruits = ["apples", "oranges", "pears", "grapes", "bananas", 0, [1, 2, 3], true, null];

// Length of array
console.log("Fruits", fruits.length);

// Add elements into our array
fruits.push("mangoes");

// Remove elements from our array
fruits.pop();

// Indexing
console.log("3rd fruit", fruits[2]);

// Update with indexing
fruits[2] = "pineapples";



console.log("Fruits", fruits);