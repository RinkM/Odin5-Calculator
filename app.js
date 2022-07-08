let var1;
let var2;
let var3;
let answer;

let num1 = 15;
let num2 = 3;
let result;

let allButtons = document.querySelectorAll(".button");

let btnAC = document.querySelector(".btnAC");
let btnNegative = document.querySelector(".btnNegative");
let btnPercent = document.querySelector(".btnPercent");
let btnDivide = document.querySelector(".btnDivide");


// const daButtons = allButtons.map(btn => {
//     addEventListener(onclick, console.log("click") )
// })


const btnSeven = document.querySelector(".btnSeven");
const btnEight = document.querySelector(".btnEight");
const btnNine = document.querySelector(".btnNine");
const btnMultiply = document.querySelector(".btnMultiply");

const btnFive = document.querySelector(".btnFive");
const btnSix = document.querySelector(".btnSix");
const btnFour = document.querySelector(".btnFour");
const btnMinus = document.querySelector(".btnMinus");

const btnOne = document.querySelector(".btnOne");
const btnTwo = document.querySelector(".btnTwo");
const btnThree = document.querySelector(".btnThree");
const btnPlus = document.querySelector(".btnPlus")

const btnZero = document.querySelector(".btnZero");
const btnDecimal = document.querySelector(".btnDecimal");
const btnEqual = document.querySelector(".btnEqual");

const screen  = document.querySelector(".screen");




function buttonPress(buttonName){


}


function addition(num1,num2){
    result = num1+num2
    console.log(result)

    return result
}

function subtraction(num1,num2){
    result = num1-num2
    console.log(result)
    return result
}

function multiplication(num1,num2){
    result = num1*num2
    console.log(result)
    return result
}

function division(num1,num2){
    result = num1/num2
    console.log(result)
    return result
}



function operateif(operation){
    if (operation == "+"){
        addition(num1,num2);
    }else if(operation == "-"){
        subtraction(num1,num2);
    }else if(operation == "*"){
        multiplication(num1,num2);
    }else if(operation == "/"){
        division(num1,num2);
    }else {console.log("Error : operateif didn't operate.")

    }
}


function operate(operation){
    switch(operation){
        case "+":
            addition(num1,num2);
            break
        case "-":
            subtraction(num1,num2);
            break
        case "*":
            multiplication(num1,num2);
            break
        case "/":
            division(num1,num2);
            break
    }
}