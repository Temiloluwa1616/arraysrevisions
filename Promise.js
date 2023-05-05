fetch("https://jsdemo-3f387-default-rtdb.e")
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