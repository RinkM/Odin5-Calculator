// import {calcButtons, buttonOrder} from "./buttons.js";
// PC-Branch be41f5b1

let screenDiv;
let var1="";
let var2 ="";
let operator="";
let var3;
let answer="";
let equation = `${var1} ${operator} ${var2}`
let keyStroke;
let buttonTextArray = [];


let num1 = 15;
let num2 = 3;
let result;
let numberSelect = 0;
const setNumberSelect =  (number)=>{numberSelect = number};
const workspace2 = document.querySelector(".workspace2");

// Does Decimal work?
// What's up with the function list?  it runs automatically...
// https://www.w3.org/TR/uievents-code/#keyboard-key-codes

// todo btnNegPos and btnPercent
// const calcButtons = [
//     {className: "btn1", btnType:"number", text: 1, keyCode : "Digit1", onClick:()=>buttonNumber(1)},
//     {className: "btn2", btnType:"number", text: 2, keyCode : "Digit2", onClick:()=>buttonNumber(2)},
//     {className: "btn3", btnType:"number", text: 3, keyCode : "Digit3", onClick:()=>buttonNumber(3)},
//     {className: "btn4", btnType:"number", text: 4, keyCode : "Digit4", onClick:()=>buttonNumber(4)},
//     {className: "btn5", btnType:"number", text: 5, keyCode : "Digit5", onClick:()=>buttonNumber(5)},
//     {className: "btn6", btnType:"number", text: 6, keyCode : "Digit6", onClick:()=>buttonNumber(6)},
//     {className: "btn7", btnType:"number", text: 7, keyCode : "Digit7", onClick:()=>buttonNumber(7)},
//     {className: "btn8", btnType:"number", text: 8, keyCode : "Digit8", onClick:()=>buttonNumber(8)},
//     {className: "btn9", btnType:"number", text: 9, keyCode : "Digit9", onClick:()=>buttonNumber(9)},
//     {className: "btn0", btnType:"number", text: 0, keyCode : "Digit0", onClick:()=>buttonNumber(0)},
//     {className: "btnDecimal", btnType:"decimal", number:".", text: ".", keyCode : "Digit0", onClick:()=>buttonNumber(".")},
//     {className: "btnPlus", btnType: "operator", operation: "+", text: "+", keyCode : "Digit0", onClick:()=> buttonOperation("add")},
//     {className: "btnMinus", btnType: "operator", operation: "-", text: "-", keyCode : "Digit0", onClick:()=> buttonOperation("minus")},
//     {className: "btnMultiply", btnType: "operator", operation: "*", text: "*", keyCode : "Digit0", onClick:()=> buttonOperation("times")},
//     {className: "btnDivide", btnType: "operator", operation: "/", text: "/", keyCode : "Digit0", onClick:()=> buttonOperation("divide")},
//     {className: "btnEqual", btnType: "equal", operation: "=", text: "=", keyCode : "Digit0", onClick:()=> buttonEquals()},
//     {className: "btnAC", btnType: "clear", text: "AC", keyCode : "Escape", onClick:()=> buttonClear()},
//     {className: "btnNegPos", btnType: "negPos", text: "+/-", keyCode : "Digit0", onClick:()=> buttonNegPos()},
//     {className: "btnPercent", btnType: "percent", text: "%", keyCode : "%", onClick:()=> buttonClear()},
// ]; 

const reCalcButtons = [
    [{className: "btnAC", btnType: "clear", text: "AC", keyCode : "Escape", onClick:()=> buttonClear()},
    {className: "btnNegPos", btnType: "negPos", text: "+/-", keyCode : "Digit0", onClick:()=> buttonNegPos()},
    {className: "btnPercent", btnType: "percent", text: "%", keyCode : "%", onClick:()=> buttonClear()},
    {className: "btnDivide", btnType: "operator", operation: "/", text: "/", keyCode : "Digit0", onClick:()=> buttonOperation("/")}],

    [{className: "btn1", btnType:"number", text: 1, keyCode : "Digit1", onClick:()=>buttonNumber(1)},
    {className: "btn2", btnType:"number", text: 2, keyCode : "Digit2", onClick:()=>buttonNumber(2)},
    {className: "btn3", btnType:"number", text: 3, keyCode : "Digit3", onClick:()=>buttonNumber(3)},
    {className: "btnPlus", btnType: "operator", operation: "+", text: "+", keyCode : "Digit0", onClick:()=> buttonOperation("+")}],

    [{className: "btn4", btnType:"number", text: 4, keyCode : "Digit4", onClick:()=>buttonNumber(4)},
    {className: "btn5", btnType:"number", text: 5, keyCode : "Digit5", onClick:()=>buttonNumber(5)},
    {className: "btn6", btnType:"number", text: 6, keyCode : "Digit6", onClick:()=>buttonNumber(6)},
    {className: "btnMinus", btnType: "operator", operation: "-", text: "-", keyCode : "Digit0", onClick:()=> buttonOperation("-")}],
    
    [{className: "btn7", btnType:"number", text: 7, keyCode : "Digit7", onClick:()=>buttonNumber(7)},
    {className: "btn8", btnType:"number", text: 8, keyCode : "Digit8", onClick:()=>buttonNumber(8)},
    {className: "btn9", btnType:"number", text: 9, keyCode : "Digit9", onClick:()=>buttonNumber(9)},
    {className: "btnMultiply", btnType: "operator", operation: "*", text: "*", keyCode : "Digit0", onClick:()=> buttonOperation("*")}],

    [{className: "btn0", btnType:"number", text: 0, keyCode : "Digit0", onClick:()=>buttonNumber(0)},
    {className: "btnDecimal", btnType:"decimal", number:".", text: ".", keyCode : "Digit0", onClick:()=>buttonNumber(".")},
    {className: "btnEqual", btnType: "equal", operation: "=", text: "=", keyCode : "Digit0", onClick:()=> buttonEquals()}]
]; 


  // This controls the order of the buttons as the appear on the screen.
// const buttonOrder = 
//     [[calcButtons.btnAC, calcButtons.btnNegPos, calcButtons.btnPercent, calcButtons.btnDivide],
//    [calcButtons.btn7, calcButtons.btn8, calcButtons.btn9, calcButtons.btnMultiply],
//    [calcButtons.btn4, calcButtons.btn5, calcButtons.btn6, calcButtons.btnMinus],
//    [calcButtons.btn1, calcButtons.btn2, calcButtons.btn3, calcButtons.btnPlus],
//    [calcButtons.btn0, calcButtons.btnDecimal, calcButtons.btnEqual]]

const rowArray = [];
const buttonArray = []
   
function buildCalculator (){
    screenDiv = document.createElement("div");
    screenDiv.classList.add("screen");
    workspace2.appendChild(screenDiv);
    // buttonTextFunc()
    // keyReporter()
    // keyListener()



    for (const row of reCalcButtons){
        const rowIndex = reCalcButtons.indexOf(row)
        rowArray[rowIndex] = document.createElement("div");
        rowArray[rowIndex].style.display = "flex";
        rowArray[rowIndex].classList.add("row");
        rowArray[rowIndex].classList.add(`row${rowIndex}`);
        reCalcButtons.filter(obj => {
            console.log(obj.text)
            return obj.text == 6
          })
        

        for (const btn of row){
            const btnIndex = row.indexOf(btn)
            buttonArray[btnIndex] = document.createElement("button");
            buttonArray[btnIndex].classList.add("test", "Button", btn.className, btn.btnType);
            rowArray[rowIndex].appendChild(buttonArray[btnIndex])

            const button = buttonArray[btnIndex]
            button.textContent = `${btn.text}`
            button.addEventListener('click', btn.onClick);
// todo button.keyCode

         }
        workspace2.appendChild(rowArray[rowIndex])
    }
}

const buttonTextFunc = ()=>{ 
    for (item of buttonOrder){
        console.log(item);
        for (piece of item){
            console.log(piece.keyCode); 
            buttonTextArray.add(piece.text)
        }
    }
    console.log(buttonTextArray)
}




const handleKeyboardInput = (e) => {
    console.log(e)
    if ((e.key >= 0 && e.key <= 9) || e.key == ".") {
      buttonNumber(e.key);
    }
  
    if (e.key == "=" || e.key == "Enter") {
      buttonEquals();
    }
  
    // if (e.key == "Backspace") deleteOne();
  
    if (e.key == "Escape") {buttonClear();}
  
    if (e.key == "+" || e.key == "-" || e.key == "*" || e.key == "/") {
      {buttonOperation(e.key);}
    }
  };

window.addEventListener("keydown", handleKeyboardInput)

const keyListener = ()=>{buttonTextArray.filter(word == keyStroke)}

buildCalculator()
const screen  = document.getElementsByClassName("screen")[0]


function buttonClear(){
    setNumberSelect(0);
    equation ="";
    var1 = "";
    var2 = "";
    screen.textContent = equation;
}

function buttonOperation(operation) {
    if (var1){
        let symbol;
        operator = operation
        if (operation == "+"){
            symbol = "+";
        }else if(operation == "-"){
            symbol = "-";
        }else if(operation == "*"){
            symbol = "*";
        }else if(operation == "/"){
            symbol = "/";
        }else {console.log("Error : buttonOperation didn't operate.")
        }
        equation = equation + symbol;
        setNumberSelect(1)
        screen.textContent = equation;
    }
    
}

function buttonEquals (){
    setNumberSelect(0);
    if (var1 && var2 && operator){
        if (operator == "add"){
            answer = addition();
        }else if(operator == "minus"){
            answer = subtraction();
        }else if(operator == "times"){
            answer = multiplication();
        }else if(operator == "divide"){
            answer = division();
        }else {console.log("Error : buttonnEquals didn't operate.")
        }
        screen.textContent = `${equation} = ${answer}`;
        var1 = answer;
        var2 = "";
    }
    
}

function buttonNumber(number){
    let string = number.toString()

    switch(numberSelect){
        case 0:
            equation = equation + string
            var1 = var1 + string; 
            screen.textContent = equation;
            break
        case 1:
            equation = equation + string
            var2 = var2 + string; 
            screen.textContent = equation;
            break
    }
}

function buttonNegPos(){
    switch(numberSelect){
        case 0:
            if (var1 < 0){
                var1 = -var1
                equation = `${var1} ${operator} ${var2}`
                screen.textContent = equation;
            } else if (var1 > 0){
                var1 = -var1
                equation = `${var1} ${operator} ${var2}`
                screen.textContent = equation;
            } else {console.log(0)}

            break
        case 1:
            if (var2 < 0){
                var2 = -var2
                equation = `${var1} ${operator} ${var2}`
                screen.textContent = equation;
            } else if (var2 > 0){
                var2 = -var2
                equation = `${var1} ${operator} ${var2}`
                screen.textContent = equation;
            } else {console.log(0)}

            break
    }
}

function addition(){
    const [x,y] =[parseInt(var1), parseInt(var2)] 
    result = x+y
    console.log(result)
    return result
}

function subtraction(){
    const [x,y] =[parseInt(var1), parseInt(var2)] 
    result = x-y
    console.log(result)
    return result
}

function multiplication(){
   const [x,y] =[parseInt(var1), parseInt(var2)] 
    result = x*y
    console.log(result)
    return result
}

function division(){
   const [x,y] =[parseInt(var1), parseInt(var2)] 
    result = x/y
    console.log(result)
    return result
}