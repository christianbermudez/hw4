/* Homework 4
   Exercise 2 – Function: Array and Object
*/

console.log("Exercise 2 – Function with Array");

function analyzeArray(arr) {
    return {
        firstElement: arr[0],
        lastElement: arr[arr.length - 1],
        length: arr.length
    };
}

// Example 1
let array1 = [4, 8, 12, 5, 20];
console.log(analyzeArray(array1));

// Example 2
let array2 = ["a", 2, "Hello", 6, [4, 5], "bye", {name: "Alice", score: 98}];
console.log(analyzeArray(array2));
