
// adds both the parameters
function add(num1, num2){
    return num1 + num2;
}

function subtract(num1, num2){
    return num1 - num2;
}

function multiply(num1, num2){
    return num1 * num2;
}

function divide(num1, num2){
    return num1 / num2; //remember to round 
}

function operate(operator, num1, num2){
    let num = 0;
    switch(operator){
        case '+':
            num = add(num1, num2);
            break;
        case '-':
            num = subtract(num1, num2);
            break;
        case '*':
            num = multiply(num1, num2);
            break;
        case '/':
            num = divide(num1, num2);
            break;
        default:
            num = add(num1, num2);
    }
    return num;
}


