// import {calcButtons, buttonOrder} from "./buttons.js";

// TODO  and Problems

    
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
    {className: "btnNegPos", btnType: "btnStyle3", text: "+/-", onClick:()=> buttonNegPos()},
    {className: "btnPercent", btnType: "btnStyle3", text: "%",  onClick:()=> buttonClear()},
    {className: "btnDivide", btnType: "operator", text: "/", onClick:()=> buttonOperation("/")}],

    [{className: "btn7", btnType:"number", text: 7, onClick:()=>buttonNumber(7)},
    {className: "btn8", btnType:"number", text: 8, onClick:()=>buttonNumber(8)},
    {className: "btn9", btnType:"number", text: 9, onClick:()=>buttonNumber(9)},   
    {className: "btnMultiply", btnType: "operator", text: "*", onClick:()=> buttonOperation("*")}],

    [{className: "btn4", btnType:"number", text: 4, onClick:()=>buttonNumber(4)},
    {className: "btn5", btnType:"number", text: 5, onClick:()=>buttonNumber(5)} ,
    {className: "btn6", btnType:"number", text: 6, onClick:()=>buttonNumber(6)},
    {className: "btnMinus", btnType: "operator", text: "-", onClick:()=> buttonOperation("-")}],
    
    [{className: "btn1", btnType:"number", text: 1, onClick:()=>buttonNumber(1)},
    {className: "btn2", btnType:"number", text: 2, onClick:()=>buttonNumber(2)},
    {className: "btn3", btnType:"number", text: 3, onClick:()=>buttonNumber(3)},
    {className: "btnPlus", btnType: "operator", text: "+", onClick:()=> buttonOperation("+")}],

    [{className: "btn0", btnType:"number", text: 0, onClick:()=>buttonNumber(0)},
    {className: "btnDecimal", btnType:"btnStyle3", text: ".", onClick:()=>buttonNumber(".")},
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
    if ((e.key >= 0 && e.key <= 9) || e.key == ".") {buttonNumber(e.key);
    } else if (e.key == "=" || e.key == "Enter") {buttonEquals();
    } else if (e.key == "Escape") {buttonClear();
    } else if (e.key == "+" || e.key == "-" || e.key == "*" || e.key == "/") {{buttonOperation(e.key);}
    }
    
    // if (e.key == "Backspace") deleteOne();
  };

window.addEventListener("keydown", handleKeyboardInput)

buildCalculator()
const screen  = document.getElementsByClassName("screen")[0]

function preciseAnswer(x) {
    if (x % 1 ===0){
        return x
    }else return x.toPrecision(6);
  }

 
  

function buttonClear(){
    setNumberSelect(0);
    var1 = "";
    var2 = "";
    operator = "";
    answer = "";
    writeEquation()
}

function buttonOperation(operation) {
    if (var1 && var2 && operator){
        buttonEquals()}
    if (answer){var1=answer}
    if (answer=="0") {var1="0"}
    if (var1){
        let symbol;
        if (operation == "+"){
            operator = "+";
        }else if(operation == "-"){
            operator = "-";
        }else if(operation == "*"){
            operator = "*"; 
        }else if(operation == "/"){
            operator = "/";
        }else {console.log("Error : buttonOperation didn't operate.")
        }
        setNumberSelect(1);
        writeEquation()
    }
}

function buttonEquals (){
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
        diagnosis("buttonEquals")
        setNumberSelect(0);
        answer = preciseAnswer(answer)
        writeEquation(answer)
        var1 = "";
        var2 = ""
    }
}

function numberLimit(){}

function buttonNumber(number){
    console.log(var1.length)
    let string = number.toString();
    switch(numberSelect){
        case 0:
            if (var1.length <= 9){
                operator=""
                answer = ""
                var1 = var1 + string; 
                writeEquation();
                break
            } else {break}
        case 1:
            if (var2.length <= 9){    
                var2 = var2 + string; 
                writeEquation();
                break
            } else {break}
        }
    }
// diagnosis("buttonNumber")

function writeEquation(answer){
    if(answer=="0"||answer){
    equation = `${var1} ${operator} ${var2} = ${answer}`
    screen.textContent = equation;
    } else {equation = `${var1} ${operator} ${var2}`
    screen.textContent = equation;}
}

function buttonNegPos(){
    switch(numberSelect){
        case 0:
            if (var1 < 0){
                var1 = -var1
                writeEquation()
            } else if (var1 > 0){
                var1 = -var1
                writeEquation()
            } else {console.log(0)}

            break
        case 1:
            if (var2 < 0){
                var2 = -var2
                writeEquation()
            } else if (var2 > 0){
                var2 = -var2
                writeEquation()
            } else {console.log(0)}
            break
    }
}

function addition(){
    const [x,y] =[parseFloat(var1), parseFloat(var2)] 
    result = x+y
    return result
}

function subtraction(){
    const [x,y] =[parseFloat(var1), parseFloat(var2)] 
    result = x-y
    return result
}

function multiplication(){
   const [x,y] =[parseFloat(var1), parseFloat(var2)] 
    result = x*y
    return result
}

function division(){
   const [x,y] =[parseFloat(var1), parseFloat(var2)] 
    result = x/y
    return result
}



function diagnosis(func) {
    console.log(func);  
    console.log("var1: " +var1 )
    console.log("var2: " +var2 )
    console.log("operator: " + operator)
    console.log("equation: " +equation )
    console.log("answer: " +answer )
}