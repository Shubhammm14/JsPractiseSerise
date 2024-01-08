const score=400
const balance=new Number(100)
console.log(balance)//[Number: 100]
console.log(score)//400
console.log(balance.toString().length)
console.log(balance.toFixed(1));

const  otherNumber=123.7878
console.log(otherNumber.toPrecision(3));//124
console.log(otherNumber.toPrecision(2))//1.2e+2


const hundred=100000000
console.log(hundred.toLocaleString('en-IN'))


//=======================Maths


console.log(typeof Math);
console.log(Math.PI);//3.141......
console.log(Math.abs(-4))//4
console.log(Math.round(4.6))//5
console.log(Math.ceil(8.1))//9
console.log(Math.floor(8.9))//8


console.log(Math.random());//either 0 or 1 decimal values
console.log((Math.random()*10)+1)


const min=10
const max=20
console.log(Math.floor(Math.random()*(max-min+1)+min))

