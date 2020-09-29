// If the operator is sqrt
    // dqrt the first number
// If the operator is power
    // mutilpy the first number by itself 
// If the operator is +
    // add the two numbers together
// If the operator is -
    // subtract the second number from the first
// If the operator is /
    // divide the first number by the second
// If the operator is *
    // multiple the numbers together!

// Otherwise
    // WHAT YA PLAYIN AT

//calculator

let restart = "yes".toLowerCase() || "no".toLowerCase();
while (restart === "yes".toLowerCase()) {
    const typeOfCalc = prompt("Please choose, Main, Advanced or Loan").toLowerCase();

    switch (typeOfCalc) {
        case "main" :
        case "advanced": 
            let firstNumber = Number(prompt("First number:"));
            const operator = prompt("Operator: (please choose +, -, /, *, sqrt, power".toLowerCase());
            if (operator !== "sqrt".toLowerCase() && operator !== "power".toLowerCase()) {
                let secondNumber = Number(prompt("Second number:"));
                if(operator === "+"){
                    alert(firstNumber + secondNumber);
                } else if (operator === "-") {
                    alert(firstNumber - secondNumber);
                } else if (operator === "/") {
                    alert(firstNumber / secondNumber);
                } else if (operator === "*") {
                    alert(firstNumber * secondNumber);
                }else {
                    alert("WHAT YA PLAYIN AT");
                }
            }
            if (operator === "sqrt"){
                alert("Answer = " + Math.sqrt(firstNumber));
            } else if (operator === "power"){
                alert("Answer = " + firstNumber * firstNumber);
            }
        break;

        case "loan":
            let loanAmount = Number(prompt("How much do you want to lend? (Please write full numbers without any currency tags)"));
            alert("You will pay back £" + (loanAmount * 1.35) + ".");
            break;
        
        default:
            alert("Nothing picked!")
            break;
    }
    restart = prompt("Do you want to restart?");
}


