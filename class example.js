// You're given strings jewels representing the types of stones that are jewels,
// and stones representing the stones you have.
//  Each character in stones is a type of stone you have.
//   You want to know how many of the stones you have are also jewels.

// Letters are case sensitive, so "a" is considered a different type of stone from "A".

// Example 1:

// Input: jewels = "aA", stones = "aAAbbbb"
// Output: 3
// Example 2:

// Input: jewels = "z", stones = "ZZ"
// Output: 0


    let countCheck = 0
    let stonesArr = stones.split("")
    
    stonesArr.forEach(function(stone){
        if(jewels.includes(stone)){
            count++
        }
    })
 return count



//  Write a function that takes two numbers (a and b) as argument. Return b percent of a
function myFunction(a, b){
   
}


// Write a function that takes 6 values (a,b,c,d,e,f) as arguments. Sum a and b.
//  Then substract by c. Then multiply by d and divide by e.
//   Finally raise to the power of f and return the result.
//    Tipp: mind the order.



// Write a function that takes two strings (a and b) as arguments.
//  If a contains b, append b to the beginning of a.
// If not, append it to the end. Return the concatenation

function myFunction(a, b){
if(a.includes(b)){
  return a + b
}else{
 return b + a 
}
}
console.log(myFunction("tunde", "ednut"))

// Write a function that takes a number as argument. If the number is even, return true. Otherwise, return false

function isEven(number) {
  return number % 2 === 0;
}



// Write a function that takes two strings (a and b) as arguments. Return the number of times a occurs in b.

function myFunction(a, b){

return b.split(a).length-1
}

// Write a function that takes a number (a) as argument.
//  If a is a whole number (has no decimal place), return true.
//   Otherwise, return false.
function myFunction(a) {
    return a - Math.floor(a) === 0
  }


  // Write a function that takes a string (a) as argument. 
  // Extract the first half a. Return the result

  function extractFirstHalf(a) {
    const halfLength = Math.ceil(a.length / 2);
    const firstHalf = a.slice(0, halfLength);
    return firstHalf;
  }
  



//   Write a function that takes two numbers (a and b) as arguments.
//    If a is smaller than b, divide a by b. 
//    Otherwise, multiply both numbers. Return the resulting value

function myFunction(a, b) {
    return a < b ? a / b : a * b
  }


//   Write a function that takes a number (a) as argument. 
//   Round a to the 2nd digit after the decimal point. 
//   Return the rounded number

 function myFunction(a) {
    return Number(a.toFixed(2));
  }


//   Write a function that takes a number (a) as argument. 
//   Split a into its individual digits and return them in an array. 
//   Tipp: you might want to change the type of the number for the splitting

function myFunction( a ) {
    const string = a + '';
    const strings = string.split('');
    return strings.map(digit => Number(digit))
  }

//   OR
  function splitDigits(a) {
    let digits = [];
    let numStr = a.toString(); // Convert number to string
    for (let i = 0; i < numStr.length; i++) {
      digits.push(parseInt(numStr.charAt(i))); // Convert each character to integer and add to array
    }
    return digits;
  }
  
  let num = 12345;
  let digitArray = splitDigits(num);
  console.log(digitArray); // Output: [1, 2, 3, 4, 5]
  


  function myFunction(a) {
   return a.slice(0, 3);
}


// Write a function that takes an array (a) and a number (n) as arguments. 
// It should return the last n elements of a.

function myFunction(a, n) {
  return a.slice(-n);
}

// Write a function that takes an array (a) and a value (b) as argument. 
// The function should remove all elements equal to 'b' from the array. 
// Return the filtered array.

function myFunction(a, b){

return a.filter(element => element !== b)
}



// Write a function that takes an array (a) as argument.
// Return the number of elements in a.

function myFunction(a) {
   return a.length;
}

// Write a function that takes an array of numbers as argument. 
// Return the number of negative values in the array.

function myFunction(a) {
   return a.filter((el) => el < 0).length;
}

// Write a function that takes an array of strings as argument. 
// Sort the array elements alphabetically. Return the result.

function myFunction( arr ) {
return arr.sort()
}


// Write a function that takes an array of numbers as argument. 
// It should return an array with the numbers sorted in descending order.

function myFunction( arr ) {
  return arr.sort((a, b) => b - a)
}
// or
function myfunction(arr){
  return arr.sort(function(a,b){
    return b - a
  })
}


// Write a function that takes an array of numbers as argument. 
// It should return the sum of the numbers.

function sumArray(arr) {
  let sum = 0;
  arr.forEach(function(num) {
    sum += num;
  });
  return sum;
}



// Write a function that takes an array of numbers as argument. 
// It should return the average of the numbers.

function calculateAverage(arr) {
  let sum = 0;
  arr.forEach(function(num) {
    sum += num;
  });
  let average = sum / arr.length;
  return average;
}


// Write a function that takes an array of strings as argument. 
// Return the longest string.

function getLongestString(arr) {
  let longestString = "";
  arr.forEach(function(str) {
    if (str.length > longestString.length) {
      longestString = str;
    }
  });
  return longestString;
}


// Write a function that takes arguments an arbitrary number of arrays. 
// It should return an array containing the values of all arrays.




// Write a function that takes two arrays as arguments. 
// Merge both arrays and remove duplicate values. 
// Sort the merge result in ascending order. Return the resulting array

function myFunction(a, b){
  let merged = a.concat(b)
  let removeDuplicate = merged.filter(function(item, i){
      return (merged.indexOf(item) === i)
      
  })
  let sorted = removeDuplicate.sort(function(a,b){
      return a - b
      
  })
  return sorted
  }
  
  console.log(myFunction([1, 2, 3], [3, 4, 5]))
  
  console.log(myFunction([-10, 22, 333, 42], [-11, 5, 22, 41, 42]))

  // OR

  function myFunction(a, b) {
    return [...new Set([...a, ...b])].sort((x, y) => x - y);
  }


  //Array Methods


  forEach

map

filter

-=

let arr = [1, 2, 3, 4, 5]

function filterEven(arr) {
    let result = []
    arr.forEach(function (num, index) { 
        if (num % 2 === 0) {
            result.push(num)
        }
    })

    return result
}

function filterEven(arr) { 
    let res =  arr.filter(function (num, index) {
                    return  num % 2 === 0
    })


}

function sumEacch() {
    let sum = 1
    arr.forEach(function (num, index) {
        sum = sum *  num
    })
    return sum

}

function sumMap() {
    let sum  = arr.map(function (num, index) {})

    return sum
}


// 6. Concatenate First and Last Name into One String
// Write a function that takes 2 parameters firstName and lastName, return a single string in the format "last, first."
// sample below
// concatName("Johnny", "Bravo") ➞ "Last, First"
// concatName("John", "Doe") ➞ "Doe, John"
// concatName("Mary", "Jane") ➞ "Jane, Mary"
// 4. Convert an Array to a String
// Create a function that takes an array of numbers or letters and returns a string.

function concatName(firstName, lastName) {
  let response = " \" " + lastName + ", " + firstName + " \" "

  return response
}
// Sample Case
// arrayToString([1, 2, 3, 4, 5, 6]) ➞ "123456"
// arrayToString(["a", "b", "c", "d", "e", "f"]) ➞ "abcdef"
// arrayToString([1, 2, 3, "a", "s", "dAAAA"]) ➞ "123asdAAAA"

// 7. Return the Remainder from Two Numbers
// Write a function that takes two numbers as arguments and returns the remainder of the first number divided by the second number.
// sample below
// remainder(1, 3) ➞ 1
// remainder(3, 4) ➞ 3
// remainder(-9, 45) ➞ -9

function remainder(num1, num2) {
// 5. Array Indexing
// Given an index and an array, return the value of the array with the given index.

  let res = num1 % num2
  return res
}
// Sample Cases
// valueAt([1, 2, 3, 4, 5, 6], 10 / 2) ➞ 6
// valueAt([1, 2, 3, 4, 5, 6], 8.0 / 2) ➞ 5
// valueAt([1, 2, 3, 4], 6.535355314 / 2) ➞ 4



