function createUser(username,score){
    this.username=username
    this.score=score
}
createUser.prototype.increment=function(){
    this.score++
}
createUser.prototype.printMe=function(){
    console.log(this.score)
}
//const chai= createUser('chai',25)//error we have to tell about the additional properties we give printMe,increment
const tea=new createUser('tea',250)
tea.printMe()


/**
 * here is what happen behind the scene when the new keyword is used:
 * 
 * a new object is created:the new keyword initiates the creation of a new javaScript object.
 * a new prototype is linked:the newly created object gets linked to the prototype property of the constructor function.
   this mean that it has acces to properties and methods defined on the constructors prototype.
 * the constructor is called: the constructor function is called with the specified arguments and this is bound to 
   the newly created object.if no explicit return is specifieed
   from the constructor,javascriptassumes this ,the newly created object ,to be the intended return value.
 * the new object is returned :after the constructor funciton has been called ,if it dosent return a non primitive value 
   (object,array,function,etc).the newly created object is returned.
 */

   //prototype .js

//    let myName='shubahm    '

//    console.log(myName.trueLength);


let myHeros=["thor","spiderman"]
let heroPower={
    thor:"hammer",
    spiderman:"sling",
    getSpiderPower:function(){
       console.log(`spidy power is ${this.spiderman}`)
    }

}
Object.prototype.hitesh=function(){
    console.log('i am inside every one')

}
heroPower.hitesh();
myHeros.hitesh();


Array.prototype.concat.heYhitesh=function(){
    console.log("we are in heYhitesh")
}
//heroPower.heYhitesh() it gives err as it does not give power 


//Inheritance
const Teacher={
    makeVideo:true
}
const teachingSupport={
    isAvailable: false
}
const TASupport={
    makeAssignment:'js assignment',
    fullTime:true,
    __proto__:teachingSupport
}
//Teacher.__proto__=teachingSupport


//moder syntax

Object.setPrototypeOf(teachingSupport,Teacher)


//lets go to our old problem
let anotherName="chaiiORcode__    "
String .prototype.trueLength=function(){
    console.log(this)
    console.log(this.name)
    console.log(`true length is${this.trim().length}`)
}
anotherName.trueLength()//13
"shubham".trueLength()//7