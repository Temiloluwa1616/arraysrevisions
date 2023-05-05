// 1. Return the First Element in an Array
// Create a function that takes an array containing only numbers and return the first element.

// Sample Cases
// getFirstValue([1, 2, 3]) ➞ 1
// getFirstValue([80, 5, 100]) ➞ 80
// getFirstValue([-500, 0, 50]) ➞ -500

function getFirstValue(arr) {
    return arr[0];
  }
  console.log(getFirstValue([1, 2, 3])); // output: 1
  console.log(getFirstValue([80, 5, 100])); // output: 80
  console.log(getFirstValue([-500, 0, 50])); // output: -500
  console.log(getFirstValue([])); // output: undefined

  
//   2. Pair Management
// Given two arguments, return an array which contains these two arguments.

// Sample Cases
// makePair(1, 2) ➞ [1, 2]
// makePair(51, 21) ➞ [51, 21]
// makePair(512124, 215) ➞ [512124, 215]

function makePair(num1, num2) {
    return [num1, num2];
  }
  console.log(makePair(1, 2)); // output: [1, 2]
  console.log(makePair(51, 21)); // output: [51, 21]
  console.log(makePair(512124, 215)); // output: [512124, 215]

  
//   3. Reverse an Array
//   a function to reverse an array.
 
//  Sample Case
//  reverse([1, 2, 3, 4]) ➞ [4, 3, 2, 1]
//  reverse([9, 9, 2, 3, 4]) ➞ [4, 3, 2, 9, 9]
//  reverse([]) ➞ []
 

  function reverseArr(arr){
    return arr.reverse()
}
console.log(reverseArr([1,2,3,4,5]))



// 4. Convert an Array to a String
// Create a function that takes an array of numbers or letters and returns a string.

// Sample Case
// arrayToString([1, 2, 3, 4, 5, 6]) ➞ "123456"
// arrayToString(["a", "b", "c", "d", "e", "f"]) ➞ "abcdef"
// arrayToString([1, 2, 3, "a", "s", "dAAAA"]) ➞ "123asdAAAA"

function arrtoStr(arr){
    return arr.toString()
}
console.log(arrtoStr([1,2,3,4,5]))

// 5. Array Indexing
// Given an index and an array, return the value of the array with the given index.

// Sample Cases
// valueAt([1, 2, 3, 4, 5, 6], 10 / 2) ➞ 6
// valueAt([1, 2, 3, 4, 5, 6], 8.0 / 2) ➞ 5
// valueAt([1, 2, 3, 4], 6.535355314 / 2) ➞ 4

function valueAt(index,array){
    return array[index]
}
console.log(valueAt([1, 2, 3, 4, 5, 6], 10 / 2)); // output: 6
console.log(valueAt([1, 2, 3, 4, 5, 6], 8.0 / 2)); // output: 5
console.log(valueAt([1, 2, 3, 4], 6.535355314 / 2)); // output: 4


// 6. Find the Index 
// Create a function that finds the index of a given item.

// Sample cases
// search([1, 5, 3], 5) ➞ 1
// search([9, 8, 3], 3) ➞ 2
// search([1, 2, 3], 4) ➞ -1


function findInx(array, item){
    return array.indexOf(item)
}
console.log(search([1, 5, 3], 5)); // output: 1
console.log(search([9, 8, 3], 3)); // output: 2
console.log(search([1, 2, 3], 4)); // output: -1



// 7. Check if an Array Contains a Given Number
// Write a function to check if an array contains a particular number.

// Sample cases
// check([1, 2, 3, 4, 5], 3) ➞ true
// check([1, 1, 2, 1, 1], 3) ➞ false
// check([5, 5, 5, 6], 5) ➞ true
// check([], 5) ➞ false

function check(array,items){
return array.includes(items)
}
console.log(check([1,2,3,4,5],3))



// 8. Invert an Array
// Create a function that takes an array of numbers arr and returns an inverted array.

// Sample case
// invertArray([1, 2, 3, 4, 5]) ➞ [-1, -2, -3, -4, -5]
// invertArray([1, -2, 3, -4, 5]) ➞ [-1, 2, -3, 4, -5]
// invertArray([]) ➞ []


function invertArray(arr) {
    // Create an empty result array
    let result = [];
  
    // Loop through each element in the input array
    for (let i = 0; i < arr.length; i++) {
      // Invert the sign of the element and add it to the result array
      result.push(-1 * arr[i]);
    }
  
    // Return the result array
    return result;
  }
  console.log(invertArray([1, 2, 3, 4, 5])); // Output: [-1, -2, -3, -4, -5]
console.log(invertArray([1, -2, 3, -4, 5])); // Output: [-1, 2, -3, 4, -5]
console.log(invertArray([])); // Output: []


// 9. Skip the Drinks with Too Much Sugar
// Write a function that takes an array of drinks and returns an array of only drinks with no sugar in them. Drinks that contain sugar (in this challenge) are:

// cola
// fanta

// Sample case
// skipTooMuchSugarDrinks(["fanta", "cola", "water"]) ➞ ["water"]
// skipTooMuchSugarDrinks(["fanta", "cola"]) ➞ []
// skipTooMuchSugarDrinks(["lemonade", "beer", "water"]) ➞ ["lemonade", "beer", "water"]


function skipTooMuchSugarDrinks(drinks) {
    // Create an empty result array
    let result = [];
  
    // Loop through each drink in the input array
    for (let i = 0; i < drinks.length; i++) {
      // Check if the drink is a sugary drink
      if (drinks[i] !== "cola" && drinks[i] !== "fanta") {
        // If the drink is not sugary, add it to the result array
        result.push(drinks[i]);
      }
    }
  
    // Return the result array
    return result;
  }
  console.log(skipTooMuchSugarDrinks(["fanta", "cola", "water"])); // Output: ["water"]
  console.log(skipTooMuchSugarDrinks(["fanta", "cola"])); // Output: []
  console.log(skipTooMuchSugarDrinks(["lemonade", "beer", "water"])); // Output: ["lemonade", "beer", "water"]

  
//   10. Filter Strings from Array
// Create a function that takes an array of strings and numbers, and filters out the array so that it returns an array of integers only.

// Sample cases
// filterArray([1, 2, 3, "a", "b", 4]) ➞ [1, 2, 3, 4]
// filterArray(["A", 0, "Edabit", 1729, "Python", "1729"]) ➞ [0, 1729]
// filterArray(["Nothing", "here"]) ➞ []

function filterArray(arr) {
    // Create an empty result array
    let result = [];
  
    // Loop through each element in the input array
    for (let i = 0; i < arr.length; i++) {
      // Check if the element is a number
      if (typeof arr[i] === "number") {
        // If the element is a number, add it to the result array
        result.push(arr[i]);
      }
    }
  
    // Return the result array
    return result;
  }
  console.log(filterArray([1, 2, 3, "a", "b", 4])); // Output: [1, 2, 3, 4]
  console.log(filterArray(["A", 0, "Edabit", 1729, "Python", "1729"])); // Output: [0, 1729]
  console.log(filterArray(["Nothing", "here"])); // Output: []

  
//   11. The Forbidden Letter
// Given a letter and an array of words, return whether the letter does not appear in any of the words.

// Sample cases
// forbiddenLetter("r", ["rock", "paper", "scissors"]) ➞ false
// forbiddenLetter("a", ["spoon", "fork", "knife"]) ➞ true
// forbiddenLetter("m", []) ➞ true

function forbiddenLetter(letter,words){
    let result = []

    for(let i = 0; i < array.words; i++){
        if(words[i].indexOf(letter) !== -1){
            return false
        }

    }
    return true
}


// 12. Cleaning Up Messy Arrays
// Create a function that takes an array. This array will contain numbers represented as strings.

// Your function should split this array into two new arrays. The first array should contain only even numbers. The second only odd. Then, wrap these two arrays in one main array and return it.

// Return an empty array if there are no even numbers, or odd.

// Sample cases
// cleanUpArray(["8"]) ➞ [[8], []]
// cleanUpArray(["11"]) ➞ [[], [11]]
// cleanUpArray(["7", "4", "8"]) ➞ [[4, 8], [7]]
// cleanUpArray(["9", "4", "5", "8"]) ➞ [[4, 8], [9, 5]]

function cleanUpArray(array){
    let result = []

    for(let i = 0; i < array.length; i++){
        
    }
}







// 13. String Pairs
// Create a function that takes a string str and returns an array of two-paired characters. If the string has an odd number of characters, add an asterisk * in the final pair.

// See the below examples for a better understanding:

// Sample cases
// stringPairs("mubashir") ➞ ["mu", "ba", "sh", "ir"]
// stringPairs("edabit") ➞ ["ed", "ab", "it"]
// stringPairs("airforces") ➞ ["ai", "rf", "or", "ce", "s*"]

function stringPairs(str) {
    let pairs = [];
    for (let i = 0; i < str.length; i += 2) {
      if (i === str.length - 1) {
        pairs.push(str[i] + "*");
      } else {
        pairs.push(str[i] + str[i+1]);
      }
    }
    return pairs;
  }
//   This function creates an empty array to hold the pairs,
//    and then loops through the characters in the string in pairs (incrementing by 2 each time).
//     If there is an odd number of characters in the string, the final pair is created with an asterisk (*).
//      Otherwise, pairs are created normally by concatenating two adjacent characters.
//       Finally, the function returns the array of pairs.


// 14. Word Endings
// Create a function that adds a string ending to each member in an array.

// Sample cases
// addEnding(["clever", "meek", "hurried", "nice"], "ly") 
// ➞ ["cleverly", "meekly", "hurriedly", "nicely"]
// addEnding(["new", "pander", "scoop"], "er")
// ➞ ["newer", "panderer", "scooper"]
// addEnding(["bend", "sharpen", "mean"], "ing")
// ➞ ["bending", "sharpening", "meaning"]

function addEnding(arr, ending) {
    let result = [];
    for (let i = 0; i < arr.length; i++) {
      result.push(arr[i] + ending);
    }
    return result;
  }
  
//using the forEach method

  function addEnding(arr, ending) {
    let result = [];
    arr.forEach((word) => {
      result.push(word + ending);
    });
    return result;
  }
  

//   15. Spelling it Out
//   Create a function which takes in a word and spells it out, by consecutively adding letters until the full word is completed.
  
//   Sample cases
//   spelling("bee") ➞ ["b", "be", "bee"]
//   spelling("happy") ➞ ["h", "ha", "hap", "happ", "happy"]
//   spelling("eagerly") ➞ ["e", "ea", "eag", "eage", "eager", "eagerl", "eage"]

function spelling(word){
  let result = []
  for(let i = 0; i < word.length; i++){
    result.push(word.slice(0, i));
  }
  return result;
}
console.log(spelling("bee"));
console.log(spelling("happy"));



  // 14. Word Endings
// Create a function that adds a string ending to each member in an array.

// Sample cases
// addEnding(["clever", "meek", "hurried", "nice"], "ly") 
// ➞ ["cleverly", "meekly", "hurriedly", "nicely"]
// addEnding(["new", "pander", "scoop"], "er")
// ➞ ["newer", "panderer", "scooper"]
// addEnding(["bend", "sharpen", "mean"], "ing")
// ➞ ["bending", "sharpening", "meaning"]


  function addEnding(array, ending){
    let result = []
    arr.forEach(function(word){
      result.push(word + ending)
      return result
    })
  }
