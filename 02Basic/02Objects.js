//singleton
//Object.create //constructor method


//object literals

const mySym=Symbol("key")

const juser={
    name:"shubham",
    "full-name":"shuabhmshaw",
    [mySym]:"myKey1",
    age:20,
    location:"kolkata",
    email:"shuabhm@gmail.com",
    lastnames:["shaw","gupta","sharma"]
}
console.log(juser.email)
console.log(juser["email"])
console.log(juser["full-name"])//we can acess full name by only this method
console.log(juser[mySym])


//juser.email=""

//Object.freeze(juser)//after doing this we cant make any changes to juser
//juser.email='';//value wont be change
//console.log(juser)
/**
 * {
  name: 'shubham',
  'full-name': 'shuabhmshaw',
  age: 20,
  location: 'kolkata',
  email: 'shuabhm@gmail.com',
  lastnames: [ 'shaw', 'gupta', 'sharma' ],
  [Symbol(key)]: 'myKey1'
}
 */

juser.greeting=function(){
    console.log("hellow world")

}
console.log(juser.greeting)//[Function (anonymous)]
console.log(juser.greeting())//hellow world


juser.greetingTwo=function(){
    console.log(`hellow world,${this.name}`)

}
console.log(juser.greetingTwo())//hellow world,shubham