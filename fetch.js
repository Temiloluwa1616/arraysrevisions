const [x1,x2,x3, ...ay] = [3, 5, 69, 100]
let newData = [3,5,6,7, 90]
const [data1, ...other] = [
                {
                "id": 1,
                "isCompleted": true,
                "title": "Basic Functions"
                },
                {
                "id": 2,
                "isCompleted": true,
                "title": "Strings"
                },
                {
                "id": 3,
                "isCompleted": false,
                "title": "Numbers"
                },
                {
                "id": 4,
                "isCompleted": true,
                "title": "Variables"
                },
                {
                "id": 5,
                "isCompleted": false,
                "title": "Conditions"
                }
]
console.log(data1)
console.log(ay)
const {status, ...rest} = {
    status: "success",
    name : "Abdullah",
    sex: "boy"
}
console.log(status)
console.log(rest.name)
const data = null ?? "kilishi"
console.log(data)
 
 
 console.log("A")
 fetch("https://jsd3f387-default-rtdb.europe-west1.firebasedatabase.app/notifications/new.json")
  .then((response)=>response.json()) 
  .then((result) => {
     const {count, message} = result
     console.log(message ) //3
      console.log("D")
  })
  .catch(error =>{
      console.log(error)
  })
  
  console.log("B")
  
function sum(a, b){
    
    return a + b
    
}
function sum2(a, b){
    return new Promise((resolve, reject)=>{
        let sumRes = a + b
        if(sumRes > 100){
            reject("You can sum ablove 100")
        }else{
            resolve(sumRes)
        }
    })
}
sum2(500,800)
.then((result) => {
    console.log(result)
})
.catch(error => {
     console.log("IOt has happened",error)
})
// sum(4,7) //11
const sayHello = (fullname) => {
    return `Hello ${fullname}, welcome`
}
const sayHelloAsync = (fullname) => {  
    
    return new Promise((resolve, reject) => {
        resolve( `Hello ${fullname}, welcome`)
        
    })
    
}
sayHello("Afeez")
sayHelloAsync("coker femi")
.then((result) => {
    
})
.catch(error => {
    
})
const _data = [
    {
      name: "Adewale Ibrohim",
      like: [ "Eba", "Egusi", "Shawa", "Ponmo"]
    },
    {
      name: "Ayodeji Ayokele",
      like: [ "Amala", "Ewedu", "Jiuce"]
    },
    {
      name: "Coker Femi",
      like: [ "Rice", "Beans", "Shawa"]
    }
    
    ]


//params []
const parryDetails  = (arr) => {
  const result =  arr.filter(item => item.like.includes('Shawa'))
  return result
    
}
 console.log(filter(_data))
const parryDetails2  = (arr) => {
 
 return new Promise((resolve, reject)=>{
      const result =  arr.filter(item => item.like.includes('Shawa'))
        resolve(result)
 })

 
}
fetch("https://jsonplaceholder.typicode.com/users")
.then(response=> response.json())
.then(response =>  response.json())
.then(result => {
 const emailResult = result.map(item => item.email)
 console.log(emailResult)
})
.catch(error => {
        console.log(error)
    
})
fetch("https://jsdemo-3f387-default-rtdb.europe-west1.firebasedatabase.app/chapters/all.json")
.then(response => response.json())
.then(result => {
    const res = result.filter(item => item.isCompleted === true)
    console.log(res)
})





const dataToCreate = {
    title: 'Mr',
    surname: 'Ali',
    lastname: 1,
}

fetch('https://jsonplaceholder.typicode.com/post', 
{
method: "post",
body: JSON.stringify(dataToCreate)

})
.then(response => response.json())
.then(json => console.log(json))