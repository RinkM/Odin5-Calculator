
let screenDiv;
let var1="";
let var2 ="";
let operator="";
let var3;
let answer="";
let equation = `${var1} ${operator} ${var2}`

let num1 = 15;
let num2 = 3;
let result;
let numberSelect = false;
const setNumberSelect =  (number)=>{numberSelect = number};



let oldButtons = document.querySelectorAll(".button");



// each button needs 
// ** HTML Text
// const name?  or connection to DOM
//function
// 

// const daButtons = allButtons.map(btn => {
//     addEventListener(onclick, console.log("click") )
// })

const workspace = document.querySelector(".workspace");
const workspace2 = document.querySelector(".workspace2");
const btnOne = document.querySelector(".btnOne");
btnOne.addEventListener('click', ()=>{
    buttonNumber(1);});
    // .textContent= `btn.text`
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

// Does Decimal work?
// What's up with the function list?  it runs automatically...
// https://www.w3.org/TR/uievents-code/#keyboard-key-codes


const calcButtons = {
    btn1: {className: "btn1", btnType:"number", text: 1, keyCode : "Digit1", onClick:()=>{buttonNumber(1);}},
    btn2: {className: "btn2", btnType:"number", text: 2, keyCode : "Digit2", onClick:()=>buttonNumber(2)},
    btn3: {className: "btn3", btnType:"number", text: 3, keyCode : "Digit3", onClick:()=>buttonNumber(3)},
    btn4: {className: "btn4", btnType:"number", text: 4, keyCode : "Digit4", onClick:()=>buttonNumber(4)},
    btn5: {className: "btn5", btnType:"number", text: 5, keyCode : "Digit5", onClick:()=>buttonNumber(5)},
    btn6: {className: "btn6", btnType:"number", text: 6, keyCode : "Digit6", onClick:()=>buttonNumber(6)},
    btn7: {className: "btn7", btnType:"number", text: 7, keyCode : "Digit7", onClick:()=>buttonNumber(7)},
    btn8: {className: "btn8", btnType:"number", text: 8, keyCode : "Digit8", onClick:()=>buttonNumber(8)},
    btn9: {className: "btn9", btnType:"number", text: 9, keyCode : "Digit9", onClick:()=>buttonNumber(9)},
    btn0: {className: "btn0", btnType:"number", text: 0, keyCode : "Digit0", onClick:()=>buttonNumber(0)},
    btnDecimal: {className: "btnDecimal", btnType:"decimal", number:".", text: ".", keyCode : "Digit0", onClick:()=>buttonNumber(".")},
    btnPlus:    {className: "btnPlus", btnType: "operator", operation: "+", text: "+", keyCode : "Digit0", onClick:()=> buttonOperation("add")},
    btnMinus:   {className: "btnMinus", btnType: "operator", operation: "-", text: "-", keyCode : "Digit0", onClick:()=> buttonOperation("minus")},
    btnMultiply:{className: "btnMultiply", btnType: "operator", operation: "*", text: "*", keyCode : "Digit0", onClick:()=> buttonOperation("times")},
    btnDivide:  {className: "btnDivide", btnType: "operator", operation: "/", text: "/", keyCode : "Digit0", onClick:()=> buttonOperation("divide")},
    btnEqual:   {className: "btnEqual", btnType: "equal", operation: "=", text: "=", keyCode : "Digit0", onClick:()=> buttonOperation("divide")},
    btnAC:      {className: "btnAC", btnType: "clear", text: "AC", keyCode : "Digit0", onClick:()=> buttonClear()},
    btnNegPos:  {className: "btnNegPos", btnType: "negPos", text: "+/-", keyCode : "Digit0", onClick:()=> buttonClear()},
    btnPercent: {className: "btnPercent", btnType: "percent", text: "%", keyCode : "Digit0", onClick:()=> buttonClear()},
  }; 
// This controls the order of the buttons as the appear on the screen.
const buttonOrder = 
    [[calcButtons.btnAC, calcButtons.btnNegPos, calcButtons.btnPercent, calcButtons.btnDivide],
   [calcButtons.btn7, calcButtons.btn8, calcButtons.btn9, calcButtons.btnMultiply],
   [calcButtons.btn4, calcButtons.btn5, calcButtons.btn6, calcButtons.btnMinus],
   [calcButtons.btn1, calcButtons.btn2, calcButtons.btn3, calcButtons.btnPlus],
   [calcButtons.btn0, calcButtons.btnDecimal, calcButtons.btnEqual]]

const rowArray = [];
const buttonArray = []
   
function Calc3 (){
    // getButtonsWorking()
    screenDiv = document.createElement("div");
    screenDiv.classList.add("screen");
    workspace2.appendChild(screenDiv);

    for (const row of buttonOrder){
        const rowIndex = buttonOrder.indexOf(row)
        rowArray[rowIndex] = document.createElement("div");
        rowArray[rowIndex].style.display = "flex";
        rowArray[rowIndex].classList.add("row");
        rowArray[rowIndex].classList.add(`row${rowIndex}`);
        for (const btn of row){
            console.log("btn: " + btn)
            const btnIndex = row.indexOf(btn)
            console.log("btnIndex: "+ btnIndex)
            buttonArray[btnIndex] = document.createElement("button");
            buttonArray[btnIndex].classList.add("test", "Button",`${btn.className}`);
            console.log("array[index]: "+ document.querySelector(`.${btn.className}`))
            console.log("btn.className: " +"."+btn.className)
            
        


            const button = document.querySelector(`.${btn.className}`)
            console.log(button)
            button.textContent = `${btn.text}`
            button.addEventListener('click', btn.onClick);
// todo button.keyCode
            
            
         }
        rowArray[rowIndex].appendChild(buttonArray[btnIndex])
        workspace2.appendChild(rowArray[rowIndex])
    }
}



Calc3()
const btn1 = document.querySelector(".btnOne");

    // .textContent= `btn.text`





function buildCalculator (){
    // getButtonsWorking()
    screenDiv = document.createElement("div");
    screenDiv.classList.add("screen");
    workspace.appendChild(screenDiv);

    for (let i = 0; i <=4;i++){
        rowArray[i] = document.createElement("div");
        rowArray[i].style.display = "flex";
        rowArray[i].classList.add("row");

        for (let x = 0; x <=3; x++){
            buttonArray[x] = document.createElement("button");
            buttonArray[x].classList.add("Button");
            buttonArray[x].classList.add("newButton");
            rowArray[i].appendChild(buttonArray[x])
        
        }
        workspace.appendChild(rowArray[i])
    }
    
};
buildCalculator()
let newButtons = document.querySelectorAll(".newButton");


// function getButtonsWorking(){
//     const buttonList = calcButtons.map((btn)=>{
//         console.log(btn.text);
//         btnAC.addEventListener('click', ()=>{
//             buttonClear();});

//         workspace.appendChild(screenDiv);
//     }
//     )
// }



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
    buttonEquals();}); 

// operator function turns on or off var 1 or var2.  
// var1status = false
// var2status = true
// if var1Status = 


// btnOne.addEventListener(c, buttonPress(1) )
// btnTwo.addEventListener(onclick, buttonPress(2) )




function buttonClear(){
    setNumberSelect(0);
    equation ="";
    var1 = "";
    var2 = "";
    screen.textContent = equation;
}

function buttonOperation(operation) {
    setNumberSelect(1)
    let symbol;
    operator = operation
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
    equation = equation + symbol;

    screen.textContent = equation;
}

function buttonEquals (){
    setNumberSelect(0);
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

function buttonNumber(number){
    let string = number.toString()
    switch(numberSelect ){
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
    switch(numberSelect ){
        case 0:
            var1 = -var1
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