//for loop
// for(let i=0;i<10;i++){
//     if(i%2==0)
//     console.log(i+1)
//     else
//     console.log(i)
// }

let myArr=["shubahm","varun","taqui"]
for(let i=0;i<myArr.length;i++){
    console.log(myArr[i])
}

//use of break and continue

//while,do while same as java

//for of
//const arr=[1,2,3,4,5]
const arr="shubham"
for(const i of arr){//s /n h /n............bham
    console.log(i)
}

//maps
const map=new Map()
map.set(1,"shubahm")
map.set(2,"ahm")
map.set(3,"hubahm")
map.set(4,"ubahm")
map.set(5,"hm")
for (const [key,value] of map) {
    console.log(key,":",value);
}

// const myObj={
//     1:"shuabham",    
//     2:"shuabh"
// }
// for (const [key,value] of object) {     err object is not iterable
//     console.log(key,":",value)      for of is not used to iterate objects
// }


const myObj={
    1:"javascript",    
    2:"java",
    3:"c++"
}
for (const key in myObj) {
    console.log(key,":",myObj[key])
}


const  arr1 =["shuabhm","varun","taqui","harshita","zayed","sujal"]
for (const key in arr1) {
    console.log(arr1[key])
}
//we cant use for in for maps like we cant use for of for 


//foreach

const code=["java","ruby","rust"]
code.forEach(function(item){console.log(item)})

code.forEach((item)=>{
console.log(item)
})

function print(item){
console.log(item)
}
code.forEach(print)

code.forEach((item,index,arr)=>{
    console.log(item,index,arr)
})


const myCode=[
    {
        name:"java",
        student:"shuabhm"
    },
    {
        name:"python",
        student:"vedda"

    },
    {
        name:"c++",
        student:"Taqui"
    }
]
myCode.forEach((item)=>{
    console.log(item.name)
})


//====================================================================


// const  arr2 =["shuabhm","varun","taqui","harshita","zayed","sujal"]
// const value=arr2.forEach((item)=>{
//  return item
// })
// console.log(value)//undefined for each does not return any thing


const nums=[1,2,3,4,5,6,7,8,9,0]
const num=nums.filter((num)=>num>4)//or((num)=>{return num>4})
console.log(num)//[ 5, 6, 7, 8, 9 ]

let newNums=[]
nums.forEach((item)=>{
    if(item>4){
     newNums.push(item)
    }

})
console.log(newNums)

//
// const userBooks=books.filter((item)=>{
//     return item.genre==='history'
// })
//
// const userBooks=books.filter((item)=>{
//     return item.publish>=2000
// })
//
// const userBooks=books.filter((item)=>{
//     return item.genre==='history' && item.publish>=2000
// })
//console.log(userBooks)

let myNums=[1,2,3,4,5,6,7,8,9,0]
// myNums=myNums.map((num)=>{
// return num+10
// })
// console.log(myNums)
/**
 * [
  11, 12, 13, 14, 15,
  16, 17, 18, 19, 10
]
 */


// const nom=myNums
//               .map((item)=>item+10)
//               .map((item)=>item*10)
//               .filter((item)=>item>150)

//               console.log(nom)//[ 160, 170, 180, 190 ]


//reduce

