##





Screen View : 
|equation =     answer          |
|                               |
|                               |
|               current number  |


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

