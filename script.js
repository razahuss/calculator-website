

const displayScreen = document.querySelector(".display");

let currentDisplayValue = null;
let secondNum = null;
let currentoperator = null;
let toggleNum = 1;

const btnNumOne = document.querySelector(".one").addEventListener("click",() => {DisplayValue(1);});
const btnNumTwo = document.querySelector(".two").addEventListener("click", () => {DisplayValue(2);});
const btnNumThree = document.querySelector(".three").addEventListener("click", () => {DisplayValue(3);});
const btnNumFour = document.querySelector(".four").addEventListener("click", () => {DisplayValue(4);});
const btnNumFive = document.querySelector(".five").addEventListener("click", () => {DisplayValue(5);});
const btnNumSix = document.querySelector(".six").addEventListener("click", () => {DisplayValue(6);});
const btnNumSeven = document.querySelector(".seven").addEventListener("click", () => {DisplayValue(7);});
const btnNumEight = document.querySelector(".eight").addEventListener("click", () => {DisplayValue(8);});
const btnNumNine = document.querySelector(".nine").addEventListener("click", () => {DisplayValue(9);});
const btnNumZero = document.querySelector(".zero").addEventListener("click", () => {DisplayValue(0);});

const btnPlus = document.querySelector(".plus").addEventListener("click", () => {Operate("+");});
const btnMinus = document.querySelector(".minus").addEventListener("click", () => {Operate("-");});
const btnMultiply = document.querySelector(".multiply").addEventListener("click", () => {Operate("*");});
const btnDivide = document.querySelector(".divide").addEventListener("click", () => {Operate("/");});

const btnEquals = document.querySelector(".equal").addEventListener("click", () => {doCalculation(currentoperator, currentDisplayValue, secondNum);});

const btnAC = document.querySelector(".AC").addEventListener("click", () => {clear();});
const btnPlusMinus = document.querySelector(".plusMinus").addEventListener("click", () => {turnNegOrPos();});
const btnPercent = document.querySelector(".percent").addEventListener("click", () => {percentNum();});

function toggler(){
    toggleNum *= -1;
}

function Operate(oper){
    if(currentDisplayValue != null &&
        currentoperator != null &&
        secondNum != null){
            doCalculation(currentoperator, currentDisplayValue, secondNum);
        }
    toggler();
    displayScreen.innerHTML = "";
    switch(oper){
        case "+":
            currentoperator = "+";
            break;
        case "-":
            currentoperator = "-";
            break;
        case "*":
            currentoperator = "*";
            break;
        case "/":
            currentoperator = "/";
            break;
        default:
            currentoperator = "+";
            console.log("Error in operation: defaulting to addition");
    }
}

function doCalculation(operator, num1, num2){
    switch(operator){
        case "+":
            currentDisplayValue = num1 + num2;
            displayScreen.innerHTML = currentDisplayValue;
            console.log(currentDisplayValue);
            break;
        case "-":
            currentDisplayValue = num1 - num2;
            displayScreen.innerHTML = currentDisplayValue;
            console.log(currentDisplayValue);
            break;
        case "*":
            currentDisplayValue = num1 * num2;
            displayScreen.innerHTML = currentDisplayValue;
            console.log(currentDisplayValue);
            break;
        case "/":
            currentDisplayValue = num1 / num2;
            displayScreen.innerHTML = currentDisplayValue;
            console.log(currentDisplayValue);
            break;
        default:
            num1 - num2;
    }
    secondNum = null;
    currentoperator = null;
    toggler();

}

function DisplayValue(num){
    if(currentoperator === null){
        clear();
    }
    if(displayScreen.innerHTML.length < 9){
        if(toggleNum === 1){
            displayScreen.innerHTML += num;
            currentDisplayValue = new Number(displayScreen.innerHTML);
            console.log("current display val: " + currentDisplayValue);
        }
        else{
            displayScreen.innerHTML += num;
            secondNum = new Number(displayScreen.innerHTML);
            console.log("second num: " + secondNum);
        }
    }
}

function turnNegOrPos(){
    if(toggleNum === 1){
        currentDisplayValue *= -1;
        displayScreen.innerHTML = currentDisplayValue;
    }
    else{
        secondNum *= -1;
        displayScreen.innerHTML = secondNum;
    }
}

function percentNum(){
    if(toggleNum === 1){
        currentDisplayValue /= 100;
        displayScreen.innerHTML = currentDisplayValue;
    }
    else{
        secondNum /= 100;
        displayScreen.innerHTML = secondNum;
    }
}

function clear(){
    displayScreen.innerHTML = "";
    currentDisplayValue = null;
    currentoperator = null;
    secondNum = null;
}