const user={
    username:"shubham",
    price:900,
    welcomeMessage: function(){
        console.log(`${this.username},welcome to my website`)
        console.log(this)//return the whole object
        // {
        //     username: 'shubham',
        //     price: 900,
        //     welcomeMessage: [Function: welcomeMessage]
        //   }
    }
}
user.welcomeMessage()
user.username="shubham shaw"
user.welcomeMessage()

console.log(this)//{}

// function chai(){
//     const username="shuabhm"//context
//     console.log(this)//it is not empty neither {} it will return a lot of predefined value
//     console.log(this.username)//undefined it does not work as same that is on object 
//        .in functions the behaviour is different
// }
// chai()


// const chai= function(){
//     let username="shubham"
//     console.log(this.username)//undefined
    
// }
// chai()

const chai=()=>{
   let username="shuabhm"
   console.log(this.username)//undefined
   console.log(this)//undefined
}
chai()




// const addTwo=(num1,num2)=>{
//     return num1+num2
// }
// console.log(addTwo(3,4))//7


// const addTwo=(num1,num2)=> num1+num2

//const addTwo=(num1,num2)=> (num1+num2)
const addTwo=(num1,num2)=>({username:"shubham"})
console.log(addTwo(3,4))//7



