//Dates

let myDate=new Date()
console.log(myDate)//2024-01-08T22:13:28.190Z
console.log(typeof myDate)//object
console.log(myDate.toDateString());//Mon Jan 08 2024
console.log(myDate.toISOString());//2024-01-08T22:13:28.190Z
console.log(myDate.toJSON());//2024-01-08T22:13:28.190Z
console.log(myDate.toLocaleDateString());//1/8/2024
console.log(myDate.toString());//Mon Jan 08 2024 22:13:28 GMT+0000 (Coordinated Universal Time)

let mytdDate=new Date(2023,0,7)//months starts from 0
console.log(mytdDate.toDateString());//Sat Jan 07 2023


// let myTimeDate=new Date((2023,0,7,5,3,1))//1/1/1970, 12:00:00 AM
let myTimeDate=new Date("2023-01-7")//1/7/2023, 12:00:00 AM
console.log(myTimeDate.toLocaleString())

let myTimestamp=Date.now()//give current time in milli sec
console.log(myTimestamp)
console.log(myTimeDate.getTime())

console.log(Math.floor(Date.now()/1000))//1704752818 seconds
console.log(new Date().getMonth()+1)//january is 0 in java script
const myTDate=new Date();
console.log(myTDate.toLocalString('default',{//err
    weekday:"long",
}))

