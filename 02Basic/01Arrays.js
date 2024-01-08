const arr=[0,1,2,2,3,4,56,7,8]
const arr1=["shuabhm","dhsigcgi"]
const arr3=new Array(1,12,3,4,56,6)
console.log(arr[0])

//Araay methods
 
arr.push(99)
console.log(arr);
arr.pop()
console.log(arr)
/* OUTPUT
0
[
  0,  1, 2, 2,  3,
  4, 56, 7, 8, 99
]
[
  0,  1, 2, 2, 3,
  4, 56, 7, 8
]
*/

arr.unshift('a')
console.log(arr)
arr.shift()
console.log(arr)
/**
  [
  'a', 0, 1,  2, 2,
  3,   4, 56, 7, 8
]
[
  0,  1, 2, 2, 3,
  4, 56, 7, 8
]
 */
console.log(arr.includes(9))//false 9 i snot present in array
console.log(arr.indexOf(9))//-1

const newArr=arr.join()
console.log(arr)
console.log(newArr)
/**
 * [
  0,  1, 2, 2, 3,
  4, 56, 7, 8
]
0,1,2,2,3,4,56,7,8//join converts the array to string
 */

//silce ,splice
const myn1=arr.slice(1,3)
console.log(myn1)//[ 1, 2 ]
console.log("B ",arr)
/**
 * B  [
  0,  1, 2, 2, 3,
  4, 56, 7, 8
]

 */
const myn2=arr.splice(1,3)
console.log(myn2)//[ 1, 2, 2 ]
console.log("B ",arr)
/**
 * B  [ 0, 3, 4, 56, 7, 8 ]
 */

const mavel=["Ironman","thor","Superman"]
const dc=["flash","Batman","superman"]
//mavel.push(dc)
//console.log(mavel)//[ 'Ironman', 'thor', 'Superman', [ 'flash', 'Batman', 'superman' ] ]
//console.log(mavel[3][1]);//Batman
//let newhr=mavel.concat(dc)
//console.log(newhr)//[ 'Ironman', 'thor', 'Superman', 'flash', 'Batman', 'superman' ]
  const newHero=[...mavel,...dc]
  console.log(newHero)//[ 'Ironman', 'thor', 'Superman', 'flash', 'Batman', 'superman' ]

  const realArr=[1,2,3,[4,5],6,8,[9,[7,0,[4]]]]
  const usefulRealArr=realArr.flat(Infinity)
  console.log(usefulRealArr)
/**
 * [
  1, 2, 3, 4, 5,
  6, 8, 9, 7, 0,
  4
]
 */

console.log(Array.isArray("shubahm"));//false
console.log(Array.from("shubham"));
/**
 * [
  's', 'h', 'u',
  'b', 'h', 'a',
  'm'
]
 */

console.log(Array.from({name:"shubahm"}))//interesting if it cant convert to array it will retur [] empty array


let score1=100;
let score2=200;
let score3=300;
console.log(Array.of(score1,score2,score3))//[ 100, 200, 300 ]



