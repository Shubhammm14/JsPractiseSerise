class User{
    constructor(username){
        this.username=username
    }
    logme(){
        console.log(`username is${this.username}`)
    }

}
class Teacher extends User{
    constructor(username,email,password){
        super(username)
        this.email=email
        this.password=password
      
    }
    addCourse(){
        console.log(`new courseby ${this.username}`)
    }
}
const chai=new Teacher("shubahm","shuabhm@gmial.com","12345")
chai.addCourse();