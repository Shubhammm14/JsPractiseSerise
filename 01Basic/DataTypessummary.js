//#primitives

// 7 types: String,Number,Boolean,null,undefined,Symbol,BigInt

//javaScript is a Dynamically typed language
const score=100
const scorVal=10.2

const isLoggedIn=false
const outSideTemp=null//it is also a value
let userEmail;//undefinrd
const id=Symbol('123')
const anotherId=Symbol('123')
console.log(id===anotherId)//false
const bigNumber=9999999999999999999999999999999999999999999999n//bigint
console.log(typeof(bigNumber))


//referencetype(non primitives)

//Array,Objects,Functions

//Arrays
const heros=["shubahm","varun","tauqi","vedaa","sujal","zayed"]
//Objects
let myobj={
    name: "shubham",
    gender: "male",
    age: 20,
}
//function
const myFunction=function(){
   console.log("hello world")
}
console.log(typeof myFunction)//function objector object function
console.log(typeof myobj)//object
console.log(typeof heros)//object




//-----------------------------------------------------------------


// Stack (primitive),Heap (Non primitives)
  

let myName="shubham"
let anotherName=myName
anotherName="shubahm shaw"
 console.log(myName)//shubahm
 console.log(anotherName)//shubham shaw

let myDetail={
    name:"shubham",
    upi:"user@ybl"
}
let myAnotherDetail=myDetail
 myAnotherDetail.name="shuabhmshawgoogleIn.yahoo.com"
console.log(myDetail.name)//shubahmshawgoogleIn.yahoo.com
console.log(myAnotherDetail.name)//shubahmshawgoogleIn.yahoo.com


