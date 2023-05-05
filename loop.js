let names = ["Temiloluwa", "Wale", "Donnie", "Walter", "Adams", "Brandt"];

let numnames = names.length;

// initialize; test; increment
for( let i=0; i<numnames; i++){
console.log( names[i] );
}

 //Array map() method

 let dwarves = ["fili", "chunkz", "harry", "simon", "temzy", "ksi", "ethan"]

 //determine the length of each name and save it in an Array

 let lengthsOfname = dwarves.map(function(item, index, array) {
    return item.length

 });
 console.log(lengthsOfname);

 //Array forEach loop

 let dwarves = ["fili", "chunkz", "harry", "simon", "temzy", "ksi", "ethan"]

 //convert all the names to lowercase except harry
 //and console.log them
 //anonymous function

dwarves.forEach(function(item, index, array){
   if(item === "fili"){
      item = item.toUpperCase();
   }else(
      item = item.toLowerCase()
   )
   console.log(index, item);
});

let isPalindrome = function (x) {
   // Convert the integer to a string and split it into an array of characters
let str = x.toString();
let chars = str.split('');

// Reverse the array of characters and join them back into a string
let reversed = chars.reverse().join('');

// Compare the original string with the reversed string
return str === reversed;
};
console.log(isPalindrome("racecar"))

// function isPalindrome(x) {

// }

//Given a string s consisting of words and spaces, return the length of the last word in the string.


var lengthOfLastWord = function(s) {
   // Remove any trailing or leading spaces from the input string
 s = s.trim();
 
 // Find the last space in the string
 let lastSpaceIndex = s.lastIndexOf(' ');
 
 // If there are no spaces in the string, then the whole string is the last word
 if (lastSpaceIndex === -1) {
   return s.length;
 }
 
 // Otherwise, return the length of the substring after the last space
 return s.length - lastSpaceIndex - 1;
}

// Given an array of integers nums, sort the array in ascending order and return it.

var sortArray = function(nums) {
   // Use the sort() method to sort the array in ascending order
 nums.sort((a, b) => a - b);
 
 // Return the sorted array
 return nums
};


// Given an input string s, reverse the order of the words.

// A word is defined as a sequence of non-space characters. The words in s will be separated by at least one space.

// Return a string of the words in reverse order concatenated by a single space.

function reverseWords(s) {
   // Split the string into an array of words
   const words = s.split(" ");
   // Reverse the order of the words in the array
   const reversedWords = words.reverse();
   // Join the words in the reversed order with a single space
   const result = reversedWords.join(" ");
   // Return the reversed string
   return result;
 }







   //Array map() method

//  let dwarves = ["fili", "chunkz", "harry", "simon", "temzy", "ksi", "ethan"]

//  //determine the length of each name and save it in an Array

//  let lengthsOfname = dwarves.map(function(item, index, array) {
//     return item.length

//  });
//  console.log(lengthsOfname);
 
// let dwarves = ["fili", "chunkz", "harry", "simon", "temzy", "ksi", "ethan"]

//  //convert all the names to lowercase except harry
//  //and console.log them
//  //anonymous function

// dwarves.forEach(function(item, index, array){
//   if(item === "fili"){
//       item = item.toUpperCase();
//   }else(
//       item = item.toLowerCase()
//   )
//   console.log(index, item);
// });

// let array = [2, 4, 5, 8, 8]
// let array2 = [...array]
// console.log(array2)


// let names = ["Temiloluwa", "Wale", "Donnie", "Walter", "Adams", "Brandt"];
// names.sort()

//  let array = [2, 3, 4, 8, 7, 5, 8]

//   removefromfront = array.shift()
//  console.log(array)

//   removefromback = array.pop()
//  console.log(array)

//   addtoback = array.push(5)
//  console.log(array)

//   addtofront = array.unshift(9)
//  console.log(array)


// slice and splice

//   let shuffle = [10, 11, 8, 9, 5, 7, 6]
//   let shuff = shuffle.slice(2,4)
//   console.log(shuff)
  
//   let splice = shuffle.splice(2,5)
//   console.log(splice)
  
//   const array1 = [1, 4, 9, 16];

// // Pass a function to map
// const map1 = array1(x => x * 2);

// console.log(map1);
// // Expected output: Array [2, 8, 18, 32]


// map

// let array1 = [1, 4, 9, 16];
// let map1 = array1.map(function(a,b){
//     let multiplication = a * 2
//     return multiplication
//     })
//     console.log(map1)
    
//     const words = ['spray', 'limit', 'elite', 'exuberant', 'destruction', 'present'];

// const result = words.filter(word => word.length > 6);

// console.log(result);
// // Expected output: Array ["exuberant", "destruction", "present"]
  
  
//   let words = ["spray", "limit", "elite", "exuberant", "destruction", "present"]
  
//   let result = words.filter(function(word){
//       let result = word.length > 6
//       return result
//       })
//       console.log(result);



//forEach

// const array1 = ['a', 'b', 'c'];

// array1.forEach(element => console.log(element));

// let array1 = ["a", "b", "c"]
// array1.forEach(function(items){
//     let result = console.log(items)
//     })

   let grade = 65

   switch(true){
case grade >= 90:
console.log("you did great")
break
case grade >= 80:
console.log("you did good")
break
case grade >= 65:
console.log("you did ok")
break
   }



   // while loop
   let userName = ""
   while(userName == "" || userName == null){
      userName = prompt("What is your name?")
   }
   console.log("Hello", userName)


// do while loop
let userName;
do{ userName = prompt("What is your name?")}
while (userName == "")
console.log("Hello", userName)

//   10. Filter Strings from Array
// Create a function that takes an array of strings and numbers, and filters out the array so that it returns an array of integers only.

// Sample cases
// filterArray([1, 2, 3, "a", "b", 4]) ➞ [1, 2, 3, 4]
// filterArray(["A", 0, "Edabit", 1729, "Python", "1729"]) ➞ [0, 1729]
// filterArray(["Nothing", "here"]) ➞ []
 
function filterArray (array) {

  return array.filter((value)=>
typeof value === 'number')
   }

console.log(filterArray([1, 2, 3, "a", "b", 4])) 

//Iteration -- Looping

//For
    // normal for
    // - for of
    // - for in
//While
//Do While

// i++ => i = i + 1
// i+=2 => i = i + 2
//for(i=0; i < 100; i++){
    
//     console.log("i am in ")
    
    
// }

// let newArr = [ 34, 56, 21, 89,27] 
// for(let i =0; i<= newArr.length - 1; i++ ){
    
//     if(newArr[i] % 3 === 0){
//         console.log( `${i} - ${newArr[i]}`)
        
//         break
//     }
     
     
// }
//i=0
//i=1
//i=2
//i=3


function forLoop() {
    let str = "The man in the kitchen wants meat" //=> str[0]
    let res = ''
    let skipped = ''
    for (let i =0; i< str.length; i++){
        if(str[i] === 'n'){
            skipped = skipped + str.at(i)
            continue
        }
        res = res + str.at(i)
    }
        return {
            res: res,
            skipped: skipped
        }
}

console.log(skipped)
console.log(res)



                  //  removing all the 2s.
let arr1 = [2, 4, 6, 2, 7, 9]
let arr2 = []
for(let items of arr1){
    if(items === 2){
      continue  
    }
    arr2.push(items)
    }
    console.log(arr2)


let motors = [ 23, 45, 78 ]

// for(let i = 0; i<arr.length; i++){
    
//     console.log(arr[i])
    
// }

//for of
for(let motor of motors){
    if(motor === 45  ){
        break
    }
    console.log(motor)
}

//write a function that prints multiplication of 2
function multiplication(x){

for(let i=0; i<= 12; i++){
   console.log(`${i} * ${x} = ${i * x}`)
}
e
}

                                       //OBJECTS IN ARRAY


// Number of tests
// Complete the function getNumberOfTestsTaken such that it returns the number of tests taken.

const grades = [
   {
      date: "2018-12-13",
      grade: 14
   }, 
   {
      date: "2018-12-15",
      grade: 18
   }
                  ]
   
   function getNumberOfTestsTaken(grades){
    const result =   grades.filter(item=> item.grade >=0)
     return result.length
   }
   console.log(getNumberOfTestsTaken(grades)); // 2
   
   
   
   
   const sampleUsers = [
       {
     id: 1,
     firstName: "Abayomi",
     lastName: "Samuel"},
       {
     id: 2,
     firstName: "Alex",
     lastName: "Jimoh"
   }
   ];
   
   logNames(sampleUsers); // logs: "Abayomi Samuel" and "Alex Jimoh"
   
   function logNames(sampleUsers){
       
       sampleUsers.forEach(item => {
           console.log(`${item.firstName} ${item.lastName}`)
           
       })
       
   }
   
   //[ "Abayomi Samuel", "Alex Jimoh"]
   function logNames(sampleUsers){
   
    let resultArr= sampleUsers.map(item => `${item.firstName} ${item.lastName}`) 
       
       return resultArr
       
   }
   
   
   // Get sum of all grades
   // Complete the getSumOfGrades function such that it returns the sum of all grades.
   // This should work for any array received as a parameter. The array can have 1 or more grade entries in it.
   
   const results1 = [{
      date: "2018-12-13",
      grade: 14
   }, {
      date: "2018-12-15",
      grade: 18
   }]
   console.log(getSumOfGrades(results1)); // 32
   
   
   const results = [{  
       date: "2018-12-13",
       grade: 14
    }, {
       date: "2018-12-15",
       grade: 18
    }]
    console.log(getSumOfGrades(results)); // 32
    
    function getSumOfGrades(results){
        let sum  = 0
        results.forEach(item => {
            sum = sum + item.grade
        })
        return sum 
    }
   
    //Get average age
   //Complete the getAverageAge function such that it returns the average age from the users parameter.
   
   const users = [{
      joined_on: "2018-12-13",
      age: 14
   }, {
      joined_on: "2018-12-15",
      age: 18
   }];
   console.log(getAverageAge(users)); // 16
   
   function getAverageAge(users){
       let sum = 0;
          users.forEach(item => {
            sum += item.age; 
          })
          return sum /users.length;
   }
        
   // Temperatures recorded
   // Complete the getTemperatures function such that it returns an array of the temperatures recorded in the recordings parameter it receives.
   const recordings = [{
      date: "2020-01-03",
      temperature: 3
   }, {
      date: "2020-01-04",
      temperature: -4
   }];
   console.log(getTemperatures(recordings)); // [3, -4]
   
   function recordings(arr){
     
       return arr.filter(item => item.temperature)
     
     }






     //Complete the cloneConfig function such that it 
//returns a new copy of the config parameter it receives.
const originalConfig = {
   darkTheme: true
};

let newConfig = { ...originalConfig };


//Complete the enableDarkMode function such
// that it returns a clone of the config object it
// receives with the property darkTheme set to true.

const config = {
   darkTheme: false
};

function enableDarkTheme(config) {

   return { ...config, darkTheme: true }
}

console.log(enableDarkTheme(config)); // {darkTheme: true} (new object)


//10. Filter Strings from Array
// Create a function that takes an array of strings and numbers, and filters out the array so that it returns an array of integers only.

// Sample cases
// filterArray([1, 2, 3, "a", "b", 4]) ➞ [1, 2, 3, 4]
// filterArray(["A", 0, "Edabit", 1729, "Python", "1729"]) ➞ [0, 1729]
// filterArray(["Nothing", "here"]) ➞ []

function filterArray (arr){
   return  arr.filter(function(item){
      typeof item === 'number'
 })
}
console.log(filterArray([1, 2, 3, "a", "b", 4])) 



// OBJECTS AND METHODS
const obj = {
   name: "Niyi",
   age: 23,
   gender: "male",
   likes: ["football", "pingpong", "money", "jollof"],
   friends: [{name: "Ola", gender: "male", likes:["ping-pong", "money", "jollof"]},
   {}, 
   {name: "player", gender: "male", likes:["ping-pong", "coding", "jollof"]}]
   };
   
  console.log(obj.friends[2].likes[1]);
  console.log(Object.keys(obj))
  console.log(Object.values)(obj)[3][0][6]
  



//   SetTimeout

console.log("a")
console.log("b")

setTimeout(()=>{
    console.log("come collect your food")
    
    }, 500)
    
    console.log("c")
    console.log("d")
    console.log("e")
    console.log("f")
    console.log("i")
    console.log("j")
    console.log("k")


   //  PROMISE

   fetch("https://jsdemo-3f387-default-rtdb.europe-west1.firebasedatabase.app/chapters/all.json")
.then((response)=>response.json())
.then((result)=>{
    console.log(result)
    
    })
    .catch(error =>{
        console.log(error)
    })
    
    new Promise((resolve, rejected)=>{
        
        (resolve)
        (rejected)
    })
    
    
    
    
    function sum(a, b){
        return a + b
    }
    
    function sum2(a, b){
        return new Promise((resolve, reject)=>{
            resolve (a + b)
        })
    }
    
    sum2(5,8)
    .then((result)=>{
        console.log(result)
        .catch((result)=>{error})

        })


        // 200 Fetch something
       
        // 201 successful

        // 202 Accepted
        
        // 400 Bad Request



        // FETCH METHOD
        
        //GET read data
        //POST create data
        //PUT update data
        //DELETE; delete data
        
