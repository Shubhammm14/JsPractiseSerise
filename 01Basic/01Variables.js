const accountId=1445;
let accountEmail="shubhamshaw@gmail.com"
var accountPassword="12345"
accountCity="jaipur"
let accountState;//undefined
//accountId=9; not allowed
accountEmail="shubham@gmail.com"
accountPassword=1111
accountCity="kolkata"
console.log(accountEmail)
console.log([accountPassword,accountCity])
/*
highly recommended to not use var
because of issues in block scope and functional scope
declarations are not restricted by block 
function example() {
  if (true) {
    var x = 10;
  }
  console.log(x); // 10 (var is not block-scoped)
}
Variables declared with let are block-scoped, meaning they are only accessible
 within the block (or statement) where they are declared.
 function example() {
  if (true) {
    let y = 20;
  }
  console.log(y); // ReferenceError: y is not defined (let is block-scoped)
}
const are also blocked scoped
*/ 