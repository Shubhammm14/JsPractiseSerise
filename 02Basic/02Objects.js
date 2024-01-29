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


//==========================================================

//const tinderUser=new Object()//singleton object

const tinderUser={}
 tinderUser.id='123'
 tinderUser.name='shubham'
 tinderUser.logIn=false
 //console.log(tinderUser);//{ id: '123', name: 'shubham', logIn: false }
/**
 * 
 */
const regularUser={
    email:'shubham@gmail.com',
    fullDetails:{
        userFullName:{
            firstname:"shubham",
            lastname:"shaw"
        },
        profession:{
              IndividualProfession:'softwareDeveloper',
              familyPorfession:'Bussiness'
        },
        studing:'btech'
    }
}
console.log(regularUser)
/**
 * {
  email: 'shubham@gmail.com',
  fullDetails: {
    userFullName: { firstname: 'shubham', lastname: 'shaw' },
    profession: {
      IndividualProfession: 'softwareDeveloper',
      familyPorfession: 'Bussiness'
    },
    studing: 'btech'
  }
}
 */
console.log(regularUser.fullDetails.profession)
/**
 * {
  IndividualProfession: 'softwareDeveloper',
  familyPorfession: 'Bussiness'
}
 * 
 */
const obj1={1:'a',2:'b'}
const obj2={3:'c',4:'d'}
//const obj3={obj1,obj2}
//const obj3=Object.assign(obj1,obj2)//{ '1': 'a', '2': 'b', '3': 'c', '4': 'd' }//no new object is creaed obj1 is just modified and assigned to obj 3
//const obj3=Object.assign({},obj1,obj2)//{ '1': 'a', '2': 'b', '3': 'c', '4': 'd' }//none of the original objects are modified in this case ,a new object i screated and the values are assigned
const obj3={...obj1,...obj2}//{ '1': 'a', '2': 'b', '3': 'c', '4': 'd' } highly recomended to use spread method
console.log(obj3)
console.log(obj1)

const users=[
    {
        id:1,
        email:"shubahm@gmail.com"
    },
    {
        id:2,
        email:"shum@gmail.com"
    },
    {
        id:3,
        email:"hubahm@gmail.com"
    },
    {
        id:4,
        email:"ahm@gmail.com"
    },
]
users[1].email
console.log(tinderUser)

console.log(Object.keys(tinderUser))//[ 'id', 'name', 'logIn' ]
console.log(Object.values(tinderUser))//[ '123', 'shubham', false ]


console.log(Object.entries(tinderUser))//[ [ 'id', '123' ], [ 'name', 'shubham' ], [ 'logIn', false ] ]
//  ecpair is converted in the form of arrays


console.log(tinderUser.hasOwnProperty('logIn'))//true

const course ={
    courseName:"learning js",
    price:"free",
    courceInstructor:"hitesh"
}
//course.courceInstructor
const{courceInstructor:inst}=course
//console.log(courceInstructor)//hitesh
console.log(inst);//hitesh

//JSON
// {
//     "name":"hitesh",
//     "coursename":"js in hindi",
//     "price":"free",

// }


// [
//     {},
//     {},
//     {},
//     {}
// ]

