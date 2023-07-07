// VARIABLES - stores of information (like boxes)
// var, let, const

// mutable
// var name = "Akhil Boddu"; // ideally avoid using var
let age = 30; // number

// immutable
const hairColor = "black"; // string
const hasKids = false; // boolean - true or false

name = "John Doe";
// hairColor = "red"; // error because const cant be reassigned

console.log("Name & age", name, age, hairColor);

// Calculations with variables - basic calculator
const num1 = 20;
const num2 = 5;
const sum = num1 + num2;
const diff = num1 - num2;
const product = num1 * num2;
const quotient = num1 / num2;

console.log("Sum", sum);
console.log("Difference", diff);
console.log("Product", product);
console.log("Quotient", quotient);

// Concatenation of strings
const firstname = "Akhil";
const lastname = "Boddu";
const fullname = firstname + " " + lastname;
console.log(fullname);

// Template literals
const calculatorSummary = `The sum of ${num1} and ${num2} is ${sum}. The difference is ${diff}. The product is ${product}. The quotient is ${quotient}.`;
console.log("Calculator summary", calculatorSummary);
