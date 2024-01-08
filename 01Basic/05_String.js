const name="String"
const repocount=50
console.log(name+repocount+" value");
console.log(`my name is${name} repocount= ${repocount} value`)//string interpolation
const gameCounter=new String ("gog")
console.log(gameCounter[0])//g
console.log(gameCounter.__proto__);//{}


console.log(gameCounter.length)//3
console.log(gameCounter.toUpperCase())//GOG
console.log(gameCounter.charAt(2))//g
console.log(gameCounter.indexOf('o'));//1

const newString =gameCounter.substring(1);//og
console.log(newString)// og

const anotherString=gameCounter.slice(-2,4)//og
console.log(anotherString);


const str="  shuahb  "
console.log(str)
console.log(str.trim())//removes white space

const url="http:localhost/shubham%20sham"
console.log(url.replace("%20","-"))//http:localhost/shubham-sham
console.log(url.includes("/userDetails"))//false as it doesnot have this
console.log(url.split('/'))//[ 'http:localhost', 'shubham%20sham' ]
