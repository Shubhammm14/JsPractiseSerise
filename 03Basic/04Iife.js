(function chai(){//normal function//named iife
    console.log("db connection")
})();

((name)=>{//arrow function //unnamed iife
    console.log(`db connection ${name}`)
})("shubham")
