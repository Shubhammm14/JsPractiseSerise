const user={
    username:"shubham",
    email:"shubhamshaw905@gmail.com",
    password:"nkjdagial",

    getUserDetails: function(){
        console.log("shubahm")
        //console.log(`username:${username}`) username not defined
        console.log(`username ${this.username}`)
        console.log(this)
        // {
        //     username: 'shubham',
        //     email: 'shubhamshaw905@gmail.com',
        //     password: 'nkjdagial',
        //     getUserDetails: [Function: getUserDetails]
        //   }

    } 

}
console.log(user.getUserDetails())
console.log(this)//{} 



//constructor function
function User(username,email,password){
    this.username=username;
    this.email=email;
    this.password=password;
  //return this; not needed but can be used
}
// const userOne=User("varun","varun@gamil.com","pppppppppp")
// const usertwo=User("varunsh","varunsh@gamil.com","ppppppppppsh")
//they both will over ride  varun will overide shubham and varun sh will override varun there never recommended to do in such way istead use new keyword
const userOne=new User("varun","varun@gamil.com","pppppppppp")
 const usertwo=new User("varunsh","varunsh@gamil.com","ppppppppppsh")
console.log(userOne)


/*
  *
  * new keyword
  * whenever we use new keyword an empty object is created know as instance(a new object is created)
  * constructor function is called because of new keyword
  * it binds all the argument and returns 
  * and we received the values
  * 
  * 
  * 
  */


