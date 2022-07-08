let var1 = "";
let var2;
let var3;
let answer;

let num1 = 15;
let num2 = 3;
let result;
let var1Status = true;

let allButtons = document.querySelectorAll(".button");


// const daButtons = allButtons.map(btn => {
//     addEventListener(onclick, console.log("click") )
// })

const btnOne = document.querySelector(".btnOne");
const btnTwo = document.querySelector(".btnTwo");
const btnThree = document.querySelector(".btnThree");
const btnFour = document.querySelector(".btnFour");
const btnFive = document.querySelector(".btnFive");
const btnSix = document.querySelector(".btnSix");
const btnSeven = document.querySelector(".btnSeven");
const btnEight = document.querySelector(".btnEight");
const btnNine = document.querySelector(".btnNine");
const btnZero = document.querySelector(".btnZero");

const btnDivide = document.querySelector(".btnDivide");
const btnMultiply = document.querySelector(".btnMultiply");
const btnMinus = document.querySelector(".btnMinus");
const btnPlus = document.querySelector(".btnPlus")

const btnDecimal = document.querySelector(".btnDecimal");
const btnEqual = document.querySelector(".btnEqual");

const btnAC = document.querySelector(".btnAC");
const btnNegative = document.querySelector(".btnNegative");
const btnPercent = document.querySelector(".btnPercent");

const screen  = document.querySelector(".screen");


btnAC.addEventListener('click', ()=>{
    buttonClear();});
btnOne.addEventListener('click', ()=>{
    buttonNumber(1);});
btnTwo.addEventListener('click', ()=>{
    buttonNumber(2);});
btnThree.addEventListener('click', ()=>{
    buttonNumber(3);});
btnPlus.addEventListener('click', ()=> {
    buttonOperation("add");});


// operator function turns on or off var 1 or var2.  
// var1status = false
// var2status = true
// if var1Status = 


// btnOne.addEventListener(c, buttonPress(1) )
// btnTwo.addEventListener(onclick, buttonPress(2) )

function buttonClear(){
    var1Status = true
    var1 = ""
    screen.textContent = var1
}

function buttonOperation(operation) {
    let symbol = ""
    if (operation == "add"){
        symbol = "+";
    }else if(operation == "sub"){
        symbol = "-";
    }else if(operation == "times"){
        symbol = "*";
    }else if(operation == "divide"){
        symbol = "/";
    }else {console.log("Error : buttonOperation didn't operate.")
    }
    var1 = var1 + symbol;
    screen.textContent = var1
    var1Status = false;
}


function buttonNumber(number){
   let string = number.toString()
   
    var1 = var1 + string;
    console.log(var1)
    screen.textContent = var1

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