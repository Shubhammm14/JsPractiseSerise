const randomColor=function(){
    const hex="0123456789ABCDEF"
    let color='#'
    for(let i=0;i<6;i++){
     color+=hex.charAt(Math.floor(Math.random()*16))
    }
    console.log(color)
    return color;
}
let interval;
const startChangingColor=function(){
    if(!interval)
    interval=setInterval(function(){
    document.body.style.backgroundColor=randomColor()},200)
}
document.querySelector('#start').addEventListener('click',startChangingColor)
document.querySelector('#stop').addEventListener('click',function(){
    clearInterval(interval)
    interval=null
})
