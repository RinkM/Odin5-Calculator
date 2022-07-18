
issues : 
able to print +++++++ in screen.





Screen View : 
|equation =     answer          |
|                               |
|                               |
|               current number  |


Normal Operation in order : 
person presses a number.    record the number in Var1.
screen shows the full equation string [ x-y ] this is for show
behind the scenes is the actual math and equation.

x operator y 

person presses an operation. - Stops Var1 from changing. selects operation, 'opens' Var2 to change. can press operation button again.
preson presses a 2nd number - record the number in var 1.
preson presses equal. - Answer always becomes var1 unless a new number is pushed. 

press operation  - makes previous answer as Var1.  
press number - becomes new Var1

Abnormal Operation : 
person presses an operation first.
person presses equals first.  
presses equal multiple times.
person presses an operation multiple times. 


how to :
screen is only for display.  not for the actual behind the scenes part.

on number press, add to display.  which is separate to add to variable  1,11,113 etc.

## how do I know if it's var1 or var2?  
status checker tells it which variable to use.
using an operation changes it to var 2.

const numberSelect = 1 (or 2)
const setNumber (num)=>{
    numberSelect = num
}

if number select == var1, flip to var2.
if number select ==var2, do nothing.
if clear resets the var?


on operator press... add to display.  save selected operator.  'add' 'sub', etc.
flip to var2

equal

button1 - edits var1
buttonOperator - chooses the operator and opens var2.   how can there only be one
 +- etc. on screen?
 Button2 edits var2


List of all the buttons CSS class names :


btnAC
btnNegative
btnPercent
btnDivide

btnSeven
btnEight
btnNine
btnMultiply

btnFive
btnSix
btnFour
btnMinus

btnOne
btnTwo
btnThree
btnPlus

btnZero
btnDecimal
btnEqual









const calcButtons = {
    btn1: {className: "btn1", btnType:"number", text: 1, keyCode : "Digit1", onClick:()=>buttonNumber(1)},
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
    btnEqual:   {className: "btnEqual", btnType: "equal", operation: "=", text: "=", keyCode : "Digit0", onClick:()=> buttonEquals()},
    btnAC:      {className: "btnAC", btnType: "clear", text: "AC", keyCode : "Escape", onClick:()=> buttonClear()},
    btnNegPos:  {className: "btnNegPos", btnType: "negPos", text: "+/-", keyCode : "Digit0", onClick:()=> buttonNegPos()},
    btnPercent: {className: "btnPercent", btnType: "percent", text: "%", keyCode : "%", onClick:()=> buttonClear()},
  }; 