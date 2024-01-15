class User{
    constructor(username,email,password){
        this.username=username
        this.email=email
        this.password=password

    }
    encryptPassword(){
        return this.password+"abc"
    }
    changeUserName(){
        return "ABC"+this.username
    }

}
const chai=new User("shubham","shubhamShaw@gmail.com","123")
console.log(chai.encryptPassword())

//--------------------------------------------
User.prototype.encryptPassword=function(){
    return `${this.password}abc`
}
const tea=new User("tea","tea@gmail.com","123")
console.log(tea.encryptPassword())



//-----------------Inheritance---------

