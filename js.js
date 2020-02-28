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
}

//Calculate two numbers
function calculate(n1, n2, operator){

   switch(operator){
       case 'add':
           return n1 + n2
       case 'subtract':
           return n1 - n2
       case 'multiply':
           return n1 * n2
       case 'devide':
           return n1 / n2
        default:
            return "How did you do that?"
   }
} 
