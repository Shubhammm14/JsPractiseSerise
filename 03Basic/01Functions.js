function sayMyname(){
    console.log("shubham")
}
sayMyname();


function add( num1,num2){//parameters
   console.log(num1+num2)
}
add()//Nan
add(9,3)//12//arguments
const result=add(8,5)
console.log(result)//undefined



function add2( num1,num2){//parameters
    return num1+num2;
 }
const rs=add2(3,4)
console.log(rs)//7


function loginUser(username){
   return `${username} has been added as user `
}
console.log(loginUser("shubham"))//shubham has been added as user 
console.log(loginUser())//undefined has been added as user 



function lognUser(username){//we can give a default value which will work when we wont pass any value usernmae="gg" 
    if(!username){//username===undefined
        console.log("plss enter username")
        return
    }
    return `${username} has been added as user `
 }
 console.log(lognUser("shubahm"))




 function calculateCarPrice(val1,val2, ...num1){//rest operator is same bt depend on use case when we will say spread and when we will say rest operator
    return num1;//num will have 300 and 400     [300,400]
 }
 console.log(calculateCarPrice(100,200,300,400))



 const user={
    username:"shubahm",
    price:900

}
function handleObject(anyObject){
      console.log(`username is ${anyObject.username} and price is ${anyObject.price}`)
}
//handleObject(user)
handleObject({
    username:"shubham",
    price:700

})




const myNewArrray=[200,300,400,500,600]

function returnSecondValue(getArray){
    return getArray[1]
}
//console.log(returnSecondValue(myNewArrray))//300
console.log(returnSecondValue([200,300,400,500]))//300


