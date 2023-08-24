
//Create all the event listeners for each button
const clear = document.addEventListener(".clear")
const one = document.addEventListener(".one")
const two = document.addEventListener(".two")
const three = document.addEventListener(".three")
const four = document.addEventListener(".four")
const five = document.addEventListener(".five")
const six = document.addEventListener(".six")
const seven = document.addEventListener(".seven")
const eight = document.addEventListener(".eight")
const nine = document.addEventListener(".nine")
const add = document.addEventListener(".add")
const subtract = document.addEventListener(".subtract")
const multiply = document.addEventListener(".multiply")
const divide = document.addEventListener(".divide")

//store the "screen-value" in an array
//will push values to the array after each key is pressed
//then evalute the values within the array 
let screenvalue = []

function update_screen(value){
    screenvalue.push(value)
}
function clear(){
    screenvalue = [""]
}
function operate(num1,num2,operation){
    if (operation == '+'){
        return add(num1,num2)
    }
    else if (operation == '-'){
        return subtract(num1,num2)
    }
    else if (operation == '*'){
        return multiply(num1,num2)
    }
    else if (operation == '/'){
        return divide(num1,num2)
    }
    else{
        return null
    }
}

function add(num1,num2,operation){
    return parseInt(num1) + parseInt(num2)
}
function subtract(num1,num2,operation){
    return parseInt(num1) - parseInt(num2)
}
function multiply(num1,num2,operation){
    return parseInt(num1) * parseInt(num2)
}
function divide(num1,num2,operation){
    return parseInt(num1) / parseInt(num2)
}
