if(true){
    let a=10;
    const b=20
    var c=30
    console.log("inner",a)//10
}
//console.log(a);err
//console.log(b);err
//console.log(c) it will print c value


function one(){
    const username="shubahm"
    function two(){
        const website="youtube"
        console.log(username)
    }
//console.log(website) can be acccesable
    two()
}
one()


//---------------------inteeresting

console.log(addOne(5))
function addOne(num){
    return num+1;
}
//console.log(addOne(9)) it will not give any error

//addtwo(6) it will give error
const addtwo=function(num){//sometimes known to be as exxpression
    return num+2
}
addtwo(5)