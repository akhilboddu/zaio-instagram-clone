console.log("OPERATORS");

// Arithmetic operators
// +, -, *, /, %,

// modulo example: returns a remainder
console.log(10 % 3, 10 % 5);

// Relational operators
// >, <, >=, <=, ==, ===, !=, !==
const num1 = 10; //number
const num2 = "10"; //string
const isPublic = false;

// conditional statements
if (num1 === num2) {
  console.log("These numbers are equal");
} else {
  console.log("These numbers are not equal");
}

// if (isPublic) {
//   console.log("Post can be shared");
// } else {
//   console.log("Post cannot be shared");
// }

// Ternary operators
console.log(isPublic ? "Post can be shared" : "Post cannot be shared");
