let var1 = "";
let var2;
let var3;
let answer;

let num1 = 15;
let num2 = 3;
let result;
let var1Status = true;

let allButtons = document.querySelectorAll(".button");



// each button needs 
// ** HTML Text
// const name?  or connection to DOM
//function
// 

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

// first or 2nd variable selector.
let numberSelect;
const setNumberSelect =  (number)=>{numberSelect = number};
const checkNumberSelect = ()=>{
    if (numberSelect == 1) {
        return var1
    }else if (numberSelect == 2) {
        return var2
    }
}

const equation = {
    "x":"",
    "operator":"plus",
    "y":"",
    "answer": "",
} 

// Does Decimal work?
// What's up with the function list?  it runs automatically...

const calcButtons = {
  btn1: { number:1, text: 1, onClick:()=>{buttonNumber(1);}},
  btn2: { number:2, text: 2, onClick:buttonNumber(2)},
  btn3: { number:3, text: 3, onClick:buttonNumber(3)},
  btn4: { number:4, text: 4, onClick:buttonNumber(4)},
  btn5: { number:5, text: 5, onClick:buttonNumber(5)},
  btn6: { number:6, text: 6, onClick:buttonNumber(6)},
  btn7: { number:7, text: 7, onClick:buttonNumber(7)},
  btn8: { number:8, text: 8, onClick:buttonNumber(8)},
  btn9: { number:9, text: 9, onClick:buttonNumber(9)},
  btn0: { number:0, text: 0, onClick:buttonNumber(0)},
  btnDecimal: { number:".", text: ".", onClick:buttonNumber(".")},
};


// fix equal function?
const calcOperations = {
    btnPlus: {operation: "+", text: "+", onClick: buttonOperation("add")},
    btnMinus: {operation: "-", text: "-", onClick: buttonOperation("minus")},
    btnMultiply: {operation: "*", text: "*", onClick: buttonOperation("times")},
    btnDivide: {operation: "/", text: "/", onClick: buttonOperation("divide")},
    btnEqual: {operation: "=", text: "=", onClick: buttonOperation("divide")},
    btnAC: {text: "Clear", onClick: buttonClear()},
};



btnAC.addEventListener('click', ()=>{
    buttonClear();});

btnOne.addEventListener('click', ()=>{
    buttonNumber(1);});
btnTwo.addEventListener('click', ()=>{
    buttonNumber(2);});
btnThree.addEventListener('click', ()=>{
    buttonNumber(3);});
btnFour.addEventListener('click', ()=>{
    buttonNumber(4);});
btnFive.addEventListener('click', ()=>{
    buttonNumber(5);});
btnSix.addEventListener('click', ()=>{
    buttonNumber(6);});
btnSeven.addEventListener('click', ()=>{
    buttonNumber(7);});
btnEight.addEventListener('click', ()=>{
    buttonNumber(8);});
btnNine.addEventListener('click', ()=>{
    buttonNumber(9);});
btnZero.addEventListener('click', ()=>{
    buttonNumber(0);});


btnPlus.addEventListener('click', ()=> {
    buttonOperation("add");});
btnMinus.addEventListener('click', ()=> {
    buttonOperation("minus");});
btnMultiply.addEventListener('click', ()=> {
    buttonOperation("times");});
btnDivide.addEventListener('click', ()=> {
    buttonOperation("divide");});


btnEqual.addEventListener('click', ()=> {
    buttonOperation("divide");}); 

// operator function turns on or off var 1 or var2.  
// var1status = false
// var2status = true
// if var1Status = 


// btnOne.addEventListener(c, buttonPress(1) )
// btnTwo.addEventListener(onclick, buttonPress(2) )

function buttonClear(){
    setNumberSelect(1)
    var1 = ""
    screen.textContent = var1
}

function buttonOperation(operation) {
    setNumberSelect(2)
    let symbol;
    if (operation == "add"){
        symbol = "+";
    }else if(operation == "minus"){
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