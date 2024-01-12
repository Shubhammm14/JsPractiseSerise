const form=document.querySelector('form')
//this use case will give you empty
// const height=parseInt(document.querySelector('#height').value)
form.addEventListener('submit',function(e){
    e.preventDefault()
   const height=parseInt(document.querySelector('#height').value)
   const weight=parseInt(document.querySelector('#weight').value)
   const results=document.querySelector('#results')
   const weightGuide=document.querySelector('#weight-guide')
   if(height===''||height===0||isNaN(height)){
    results.innerHTML=`plasss give valid height`;
   }
   else if(weight===''||weight===0||isNaN(weight)){
    results.innerHTML=`plasss give valid weight`;
   } else{
    const bmi=(weight/((height*height)/10000)).toFixed(2)
    results.innerHTML=`<span>${bmi}</span>`
    if(bmi<18.5){
        weightGuide.innerHTML=`<h1>under weight</h1>`
    }
    else if(bmi>18.5&&bmi<29.5)
    weightGuide.innerHTML=`<h3>normal</h3>`
    else
    weightGuide.innerHTML=`<h3>Over WEight</h3>`
   }
})