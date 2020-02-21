// Add an event listener to the calculator
document.getElementById("my-calculator").addEventListener('submit', calculatorSubmit);

// Prevent the browser defeault, handle the calculator event
function calculatorSubmit(event) {
    event.preventDefault();
    var numOne = Number(document.getElementById("num-one").value);
    var numTwo = Number(document.getElementById("num-two").value);
    var result = document.getElementById("result");
    
    var calculation = calculate(numOne, numTwo);
   
    result.innerHTML = calculation;
}

//Add two numbers together... for now (-,*,% coming soon)
function calculate(n1, n2){
    return n1 + n2;
}
