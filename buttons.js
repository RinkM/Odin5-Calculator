




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
    btnEqual:   {className: "btnEqual", btnType: "equal", operation: "=", text: "=", keyCode : "Digit0", onClick:()=> buttonEquals()},
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

export {calcButtons, buttonOrder}
