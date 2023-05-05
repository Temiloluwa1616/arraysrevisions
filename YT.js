number.toLocalString(locale, {options})

let myNum = 123456.789

// myNum = myNum.toLocaleString("en-US") US ENGLISH

// myNum = myNum.toLocaleString("hi-IN") HINDI

myNum = myNum.toLocaleString("de-DE") 



myNum = myNum.toLocaleString("en-US",{style: "currency", currency: "USD"})

myNum = myNum.toLocaleString(undefined{style: "percent"})

myNum = myNum.toLocaleString(undefined{style: "unit", unit: "celsius"})
console.log(myNum) 

//2D ARRAYS

let fruits = ["apples", "orange", "bananas"]
let meats = ["eggs", "chicken", "fish"]
let vegetables = ["carrots", "onions", "potatoes"]

let grocerylist = [fruits, vegetables, meats]

grocerylist[0][2] = "steak"

for(let list of grocerylist){
    for(let food of list){
        console.log(food)
    }
} 

//spread operator

let numbers = [1, 2, 3, 4, 5, 6. 7, 8, 9]
let maximum = math.max(...numbers)
console.log(maximum)

let class1 = ["sponebob", "patrick", "sandy"]
let class2 = ["squidward", "Mr.krabs", "plankton"]

class.push(...class2)

console.log(...class1)


let ages = [18, 16, 17, 15, 23, 90]
let adults = ages.filter(checkAge)
function checkAge(element){
    return element >= 18
}
console.log(adults)

  
//object

const car1 = {
    model: "mustang",
    color: "red",
    :2023,

    drive: function(){
        console.log("you drive the car")
    },
    brake : function(){
        console.log("you step on the brakes")
    }
}


const car2 = {
    model: "corvette",
    color: "blue",
    year: 2024,

    drive : function(){
        console.log("you drive the car")
    },
    brake : function(){
        console.log("you step on the brakes")
    }
}


//this 

const car1 = {
    model: "mustang",
    color: "red",
    year:2023,

    drive : function(){
        console.log("you drive the $(this.model)")
    }
    brake : function(){
        console.log("you step on the brakes")
    }
}


const car2 = {
    model: "corvette",
      color: "blue",
    year: 2024,

    drive : function(){
        console.log("you drive the car")
    },
    brake : function(){
        console.log("you step on the brakes")
    }
}  
