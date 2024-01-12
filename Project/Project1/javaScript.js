const button=document.querySelectorAll(".button")
const body= document.querySelector("body")

button.forEach(function(button){
   button.addEventListener('click',function(e){
    console.log(e)
    console.log(e.target.className)
            body.style.backgroundColor=e.target.id
            
    // switch(e.target.id){
    //      case 'grey':
    //         body.style.backgroundColor=e.target.id
    //         break;
    //         case 'white':
    //         body.style.backgroundColor=e.target.id
    //         break;
    //         case 'yellow':
    //         body.style.backgroundColor=e.target.id
    //         break;
    //         case 'pink':
    //         body.style.backgroundColor=e.target.id
    //         break;
    //         case 'blue':
    //             body.style.backgroundColor=e.target.id
    //             break;
    //             case 'orange':
    //         body.style.backgroundColor=e.target.id
    //         break;
    // }
   })
})
