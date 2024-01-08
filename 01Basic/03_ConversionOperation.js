let score="33abc"//null will give 0 ,undefined will give NaN,true will give 1,any string that cannot be coverted to number it will give Nan
console.log(typeof score);
console.log(typeof(score));
let valueInNumber=Number(score)
console.log(typeof valueInNumber);
console.log(valueInNumber);//NaN not a number its type is number


let isLoggedIn=1
let booleanIsLoggedIn=Boolean(isLoggedIn)
console.log(booleanIsLoggedIn)//true 0gives false any string gives true "" will give false
let someNumber=33
let stringNumber=String(someNumber)
console.log(stringNumber)//33
console.log(typeof stringNumber); //String  


//------------------------------------------------------------------------------------

let value=3
let negValue=-value
console.log(negValue);
console.log(2**2)//2 to the power 2
console.log(2%3)//remaider

let str1="hello"
let str2="world"
console.log(str1+str2)

console.log("1"+2)//12
console.log(1+"2")//12
console.log("1"+2+2)//122
console.log(1+2+"2")//32
console.log(+true);//1
console.log(+"")//0


let num1,num2,num3
num1=num2=num3=2+2


let gameCounter=100
console.log(++gameCounter)
//mdn link to study