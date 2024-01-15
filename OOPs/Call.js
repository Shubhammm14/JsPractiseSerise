function setUserName(username){
    this.username=username
}
function createUser(email,password,username){
    setUserName.call(this,username)
    this.password=password
    this.email=email

}
const chai=new createUser("shubham","shubahm@gmail.com","123")
console.log(chai)
//.call passes the current execution context to some other function