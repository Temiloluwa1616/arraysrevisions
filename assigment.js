// Boolean
// let a = 2023
// let b = 2024
// let leapyear = 




// function lengthandBreath(length, breath){
//     let length = 20
//     let breath = 20
//     if(length === breath){
//         return this is a square
//     }else{
//         return this is a rectangle
//     }
// }

// 1.Write a program to check if a year is leap year or not.

function isLeapYear(year) {
if (year % 4 === 0) {
return true;
} else {
return false;
}
}

//Examples
console.log(isLeapYear(2000)); // true
console.log(isLeapYear(1998)); // false

//2. Write a function that accepts 2 parameters,length and breadth of a rectangle,
// then checks if it is square or not. it should return "This is a square "
// if the length and square are equal and "This is a rectangle" if they are not

function isSquareOrRectangle(length, breadth) {
if (length === breadth) {
return "This is a Square";
} else {
return "This is a Rectangle";
}
}

//Examples
console.log(isSquareOrRectangle(5, 9)); // This is a Rectangle
console.log(isSquareOrRectangle(8, 8)); // This is a Square

//3. Write a function that allows a shop to give a discount of 10%
// if the cost of purchased quantity is more than 1000.
// The function should take a parameter for the quantity
// You can assume 1 unit quantity will cost 100 dollars.
// Output the total cost for the user.

function calculateCost(quantity) {
let cost = quantity * 100;
if (cost > 1000) {
cost = cost - (cost * 0.1);
}
return cost;
}


console.log(calculateCost(5)); 
console.log(calculateCost(15)); 

// 4. Profitable Gamble
// Create a function that takes three arguments prob, prize, pay and returns true if prob * prize > pay; otherwise return false.

function profitableGamble(prob, prize, pay) {
return prob * prize > pay;
}

//Examples
console.log(profitableGamble(0.2, 50, 9)); // true
console.log(profitableGamble(0.9, 1, 2)); // false
console.log(profitableGamble(0.9, 3, 2)); // true

// 5. Two Makes Ten
// Create a function that takes two arguments. Both arguments are integers, a and b.
// Return true if one of them is 10 or if their sum is 10.

function makesTen(a, b) {
return a === 10 || b === 10 || a + b === 10;
}

//Examples
console.log(makesTen(9, 10)); // true
console.log(makesTen(9, 9)); // false
console.log(makesTen(1, 9)); // true

// 6. Compare Strings by Count of Characters
// Create a function that takes two strings as arguments and return either true or false
// depending on whether the total number of characters in the first string is equal to the
// total number of characters in the second string.

function comp(str1, str2) {
return str1.length === str2.length;
}

//Examples
console.log(comp("AB", "CD")); // true
console.log(comp("ABC", "DE")); // false
console.log(comp("hello", "edabit")); // false

// 7. Movie Theatre Admittance
// Write a function that checks whether a person can watch an MA15+ rated movie.
// One of the following two conditions is required for admittance:
// The person is at least 15 years old.

function acceptIntoMovie(age, isSupervised) {
  if (age >= 15 || isSupervised) {
    return true;
  } else {
    return false;
  }

  // return (age >=15  || isSupervised === true)


}
console.log(acceptIntoMovie(14, true));
console.log(acceptIntoMovie(14, false));
console.log(acceptIntoMovie(16, false));

// 8. Is the String Odd or Even?
// Given a string, return true if its length is even or false if the length is odd.

function oddOrEven(str) {
  return str.length % 2 === 0;
}
console.log(oddOrEven('apples'));
console.log(oddOrEven('pearls'));
console.log(oddOrEven('cherry'));

// 9. Is the Last Character an "N"?
// Create a function that takes a string (a random name).
// If the last character of the name is an "n", return true, otherwise return false.

// function isLastCharacterN(name){
//   let lastCharacterindex = name.length - 1
//   let characterAtTheIndex = name.charAt(lastCharacterindex)
//   if (characterAtTheIndex === "n" || characterAtTheIndex === "N"){
//     return true
//   } else {
//     return false
//   }
// }
function isLastCharacterN(name) {
  return name.charAt(name.length - 1) === 'n';
}
console.log(isLastCharacterN("temiloluwa"));


// 10. Is the Word Singular or Plural?
// Create a function that takes in a word and determines whether or not it is plural.
// A plural word is one that ends in "s".

function isPlural(word) {
  return word.endsWith('s');
}

// 11. The Fifth Argument
// Create a function that has some arguments and returns the type of the fifth argument. 
// In case the arguments were less than 5, return "Not enough arguments".

function typeOfFifthArg(a, b, c, d, e) {
  if (arguments.length < 5) {
    return "Not enough arguments";
  }
  return typeof e;
}
console.log(typeOfFifthArg(1, "hello", true, [1, 2, 3], null)); 
console.log(typeOfFifthArg(1, "hello", true, [1, 2, 3]));


// 12.Taxi Journey
// A taxi journey costs $3 for the first kilometer travelled. However, all kilometers travelled after that will cost $2 each.
// Create a function which returns the distance that the taxi must've travelled, given the cost as a parameter.

function taxiDistance(cost) {
  if (cost < 3) {
    return 1;
  } else {
    return Math.ceil((cost - 3) / 2) + 1;
  }
}
console.log(taxiDistance(3)); 1
console.log(taxiDistance(7)); 3
console.log(taxiDistance(12)); 5


// 13. Days in a Month
// Create a function that takes the month and year (as integers) and returns the number of days in that month.

function daysInMonth(month, year) {
  return new Date(year, month, 0).getDate();
}
console.log(daysInMonth(2, 2023)); // Output: 28
console.log(daysInMonth(2, 2024)); // Output: 29

// 14. Word without First Character
// Create a function that takes a word and returns the new word without including the first character.

function removeFirstCharacter(word) {
  return word.slice(1);
}
console.log(removeFirstCharacter("hello")); // Output: "ello"
console.log(removeFirstCharacter("world")); // Output: "orld"


// 15. Concatenating First and Last Character of a String
// Create a function that takes a string and returns the concatenated first and last character.

function concatenateFirstAndLast(str) {
  return str.charAt(0) + str.charAt(str.length - 1);
}
console.log(concatenateFirstAndLast("hello")); // Output: "ho"
console.log(concatenateFirstAndLast("world")); // Output: "wd"


// 16. The Study of Wumbology
// Create a function that flips M's to W's (all uppercase).

function flipMToW(str) {
  return str.replace(/M/g, "W");
}
console.log(flipMToW("I am studying Mumbo Jumbo")); // Output: "I am studying Wumbo Jumbo"
console.log(flipMToW("MMMOOOOMMMMYYY")); // Output: "WWWOOOOWWWWYYY"



