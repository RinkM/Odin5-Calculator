// import {calcButtons, buttonOrder} from "./buttons.js";

// TODO  and Problems
// able to add ++++++
// what happens after a equals.
// percentage signs
// fixing negative when needed.
//decimal writes, doesn't function.
// divide by zero error. 
// style




let screenDiv;
let var1="";
let var2 ="";
let operator="";
let answer="";
let equation = `${var1} ${operator} ${var2}`
let keyStroke;
let buttonTextArray = [];

let result;
let numberSelect = 0;
const setNumberSelect =  (number)=>{numberSelect = number};
const workspace2 = document.querySelector(".workspace2");

// Does Decimal work?
// What's up with the function list?  it runs automatically...
// https://www.w3.org/TR/uievents-code/#keyboard-key-codes

const calculatorButtons = [
    [{className: "btnAC", btnType: "clear", text: "AC",  onClick:()=> buttonClear()},
    {className: "btnNegPos", btnType: "negPos", text: "+/-", onClick:()=> buttonNegPos()},
    {className: "btnPercent", btnType: "percent", text: "%",  onClick:()=> buttonClear()},
    {className: "btnDivide", btnType: "operator", text: "/", onClick:()=> buttonOperation("/")}],

    [{className: "btn1", btnType:"number", text: 1, onClick:()=>buttonNumber(1)},
    {className: "btn2", btnType:"number", text: 2, onClick:()=>buttonNumber(2)},
    {className: "btn3", btnType:"number", text: 3, onClick:()=>buttonNumber(3)},
    {className: "btnMultiply", btnType: "operator", text: "*", onClick:()=> buttonOperation("*")}],

    [{className: "btn4", btnType:"number", text: 4, onClick:()=>buttonNumber(4)},
    {className: "btn5", btnType:"number", text: 5, onClick:()=>buttonNumber(5)},
    {className: "btn6", btnType:"number", text: 6, onClick:()=>buttonNumber(6)},
    {className: "btnMinus", btnType: "operator", text: "-", onClick:()=> buttonOperation("-")}],
    
    [{className: "btn7", btnType:"number", text: 7, onClick:()=>buttonNumber(7)},
    {className: "btn8", btnType:"number", text: 8, onClick:()=>buttonNumber(8)},
    {className: "btn9", btnType:"number", text: 9, onClick:()=>buttonNumber(9)},
    {className: "btnPlus", btnType: "operator", text: "+", onClick:()=> buttonOperation("+")}],

    [{className: "btn0", btnType:"number", text: 0, onClick:()=>buttonNumber(0)},
    {className: "btnDecimal", btnType:"decimal", text: ".", onClick:()=>buttonNumber(".")},
    {className: "btnEqual", btnType: "equal", text: "=", onClick:()=> buttonEquals()}]
]; 

const rowArray = [];
const buttonArray = []
   
function buildCalculator (){
    screenDiv = document.createElement("div");
    screenDiv.classList.add("screen");
    workspace2.appendChild(screenDiv);

    for (const row of calculatorButtons){
        const rowIndex = calculatorButtons.indexOf(row)
        rowArray[rowIndex] = document.createElement("div");
        rowArray[rowIndex].style.display = "flex";
        rowArray[rowIndex].classList.add("row");
        rowArray[rowIndex].classList.add(`row${rowIndex}`);

        for (const btn of row){
            const btnIndex = row.indexOf(btn)
            buttonArray[btnIndex] = document.createElement("button");
            buttonArray[btnIndex].classList.add("test", "button", btn.className, btn.btnType);
            rowArray[rowIndex].appendChild(buttonArray[btnIndex])
            const button = buttonArray[btnIndex]
            button.textContent = `${btn.text}`
            button.addEventListener('click', btn.onClick);
         }
        workspace2.appendChild(rowArray[rowIndex])
    }
}

const handleKeyboardInput = (e) => {
    console.log(e)
    if ((e.key >= 0 && e.key <= 9) || e.key == ".") {buttonNumber(e.key);}
    if (e.key == "=" || e.key == "Enter") {buttonEquals();}
    if (e.key == "Escape") {buttonClear();}
    if (e.key == "+" || e.key == "-" || e.key == "*" || e.key == "/") {{buttonOperation(e.key);}}
    
    // if (e.key == "Backspace") deleteOne();
  };

window.addEventListener("keydown", handleKeyboardInput)

buildCalculator()
const screen  = document.getElementsByClassName("screen")[0]


function buttonClear(){
    setNumberSelect(0);
    // equation ="";
    var1 = "";
    var2 = "";
    operator = "";
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
        // equation = equation + symbol; 
        setNumberSelect(1)
        screen.textContent = equation;
    }
}

function buttonEquals (){
    setNumberSelect(0);
    if (var1 && var2 && operator){
        if (operator == "+"){
            answer = addition();
        }else if(operator == "-"){
            answer = subtraction();
        }else if(operator == "*"){
            answer = multiplication();
        }else if(operator == "/"){
            answer = division();
        }else {console.log("Error : buttonEquals didn't operate.")
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
    return result
}

function subtraction(){
    const [x,y] =[parseInt(var1), parseInt(var2)] 
    result = x-y
    return result
}

function multiplication(){
   const [x,y] =[parseInt(var1), parseInt(var2)] 
    result = x*y
    return result
}

function division(){
   const [x,y] =[parseInt(var1), parseInt(var2)] 
    result = x/y
    return result
}