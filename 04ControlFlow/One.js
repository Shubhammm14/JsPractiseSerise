//falsyy value
/**
 * false,0,-3,BigInt 0n,"",null,undefined,NaN
 */
//rest of the other are truthy value
//"0",'false'," ",[],{},function(){}
//incase of arrays we check it using length
/**
 * const emptyObject={}
 * if(Object.keys(emptyObj).length===0){
 *    console/log("empty Object")
 * }
 */


//nullish coalescing operator(??):null undefined
let val1;
val1=5??10//5
val1=null??10//10
var1=undefined??15//15
var1=null??10??20//10

//ternary operator
const ice=100;
ice>40?console.log("i wont buy it"):("i will buy it")
