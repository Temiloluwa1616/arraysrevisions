let names = ["Temiloluwa", "Wale", "Donnie", "Walter", "Adams", "Brandt"];

let numnames = names.length;

// initialize; test; increment
for( let i=0; i<numnames; i++){
console.log( names[i] );
}

 

 let dwarves = ["fili", "chunkz", "harry", "simon", "temzy", "ksi", "ethan"]

 

 let lengthsOfname = dwarves.map(function(item, index,) {
    return item.length

 });
 console.log(lengthsOfname);

 

 let dwarves = ["fili", "chunkz", "harry", "simon", "temzy", "ksi", "ethan"]

 

dwarves.forEach(function(item, index, array){
   if(item === "fili"){
      item = item.toUpperCase();
   }else(
      item = item.toLowerCase();
   )
   console.log(index, item);
});

let isPalindrome = function(x) {
   
let str = x.toString();
let chars = str.split('');


let reversed = chars.reverse().join('');


return str === reversed;
};


var lengthOfLastWord = function(s) {
   
 s = s.trim();
 
 
 let lastSpaceIndex = s.lastIndexOf(' ');
 
 
 if (lastSpaceIndex === -1) {
   return s.length;
 }
 
 
 return s.length - lastSpaceIndex - 1;
}


let sortArray = function(nums) {
   
 nums.sort((a, b) => a - b);
 
 
 return nums
};




function reverseWords(s) {
   
   let words = s.split(" ");
   
   let reversedWords = words.reverse();
  
   let result = reversedWords.join(" ");
   
   return result;
 }