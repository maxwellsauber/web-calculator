// Add an event listener to the calculator
document.getElementById("my-calculator").addEventListener('submit', calculatorSubmit)

// Prevent the browser defeault, handle the calculator event
function calculatorSubmit(event) {
    event.preventDefault();
    var numOne = Number(document.getElementById("num-one").value)
    var numTwo = Number(document.getElementById("num-two").value)
    var numOperator = document.getElementById("num-operator").value
    var result = document.getElementById("result")
    
    var calculation = calculate(numOne, numTwo, numOperator)

    result.innerHTML = calculation

    //Obligatory HHGTTG Easter Egg
    var pageHTML = document.getElementsByTagName('html')[0]
    if(calculation === 42){
        pageHTML.className += 'hhgttg'
    }else{
        pageHTML.className = ''
    }//End HHGTTG Egg
    
}//end Submit event handler

//Calculate two numbers
function calculate(n1, n2, operator){
   switch(operator){
       case 'add':
           return n1 + n2
           break
       case 'subtract':
           return n1 - n2
           break
       case 'multiply':
           return n1 * n2
           break
       case 'devide':
           return n1 / n2
           break
        default:
            return "How did you do that?"
            break
   }
} 