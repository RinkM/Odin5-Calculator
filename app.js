


let num1 = 15;
let num2 = 3;
let result;

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



function operate(operation){
    switch(operation){
        case "+":
            addition(num1,num2);
            break
        case "-":
            addition(num1,num2);
            break
        case "*":
            addition(num1,num2);
            break
        case "/":
            addition(num1,num2);
            break
    }
}