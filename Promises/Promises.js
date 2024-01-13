const promise1= new Promise(function(resolve,reject){
    //do an async task
    //db calls,cryptography,network
    setTimeout(function(){
        console.log('async task completed');
        resolve()
    },1000)
})
promise1.then(function(){
    console.log("promise consume");
})



new Promise(function(resolve,reject){
    setTimeout(function(){
    console.log("async task completed")
    resolve()
    },1000)
}).then(function(){
console.log("promise consume")
})


const promise3= new Promise(function(resolve,reject){
    setTimeout(function(){
    resolve({username:"shubham",email:"shubhamshaw905@gmail.com",password:"shubhamshhhKey"})
    },1000)
})
promise3.then(function (user){
    console.log(user)

})



const promise4=new Promise(function(resolve,reject){
    setTimeout(function(){
        let err=true;
        if(!err){
            resolve({username:"shubham",email:"shubhamshaw905@gmail.com",password:"shubhamshhhKey"})
        }
        else{
            reject("error: something went wrong")
        }
      
    },1000)
})
promise4.then(function(user){
return user.username
}).then((username)=>{
console.log(username)
}).catch((err)=>{
 console.log(err)
}).finally(()=>{
    console.log("the promise is either resolve or rejected")
})


const promise5=new Promise((resolve,reject)=>{
   setTimeout(()=>{
    let err=true;
        if(!err){
            resolve({username:"shubham",email:"shubhamshaw905@gmail.com",password:"shubhamshhhKey"})
        }
        else{
            reject("error: something went wrong")
        }
      
   },1000)
})
async function consumePromise5(){
    try{
    const res=await promise5
    console.log(res);
    }catch(err){
        console.log(err)
    }
}
consumePromise5()



// async function promiseconsumption(){
//     try{
//     const res= await fetch('https://jsonplaceholder.typicode.com/users')
//     const data= await res.json()
//     console.log(data)}
//     catch(err){
//       console.log(err)
//     }
// }

//promiseconsumption()



 fetch('https://jsonplaceholder.typicode.com/users').then((res)=>{
     return res.json();
 }).then((data)=>{
    console.log(data);
 }).catch((err)=>{
  console.log(err)
 })

