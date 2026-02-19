/* Homework 4
   Exercise 1 – Validate Input
*/

console.log("Exercise 1 – Validate Input");

let input = prompt("Enter a number between 1 and 100:");

let number = Number.parseInt(input);

if (
    input !== null &&
    input.trim() !== "" &&
    !isNaN(number) &&
    Number.isInteger(number) &&
    number >= 1 &&
    number <= 100
) {
    console.log(`Thank you! You entered ${input}, a valid number.`);
} else {
    console.log(`Sorry, ${input} is not a valid entry.`);
}
