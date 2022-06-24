

function getPin(){

   const pin = Math.round(Math.random()* 10000)
   console.log(pin)
    const pinString = pin + ''
    if(pinString.length==4){
        return pin
    }
    else{

        getPin()
    }
}



function generatePin(){
const pin = getPin()
document.getElementById('display-pin').value = pin
 

}


  document.getElementById('key-pad').addEventListener('click',function(event){

    const number = event.target.innerText
    const calcNumber = document.getElementById('typed-numbers')
     
    if(isNaN(number)){
    if(number=='C'){
calcNumber.value = ''
    }
    }
    else{
        console.log(number)
     
        const previousNumber = calcNumber.value;
        const newNumber = previousNumber + number
        calcNumber.value = newNumber
     

    }
 


})


function varifyPin(){

const pin = document.getElementById('display-pin').value
const typedNumber = document.getElementById('typed-numbers').value
const error =  document.getElementById('notify-fail')

const success =  document.getElementById('notify-success')
if(pin==typedNumber){

    success.style.display = 'block'
    error.style.display = 'none'

    console.log('clicked')
}

else{

    success.style.display = 'none'
    error.style.display = 'block'
    console.log(' OH NOOOOO')

}

}