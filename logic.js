
//Create all the event listeners for each button
const clear = document.querySelector(".clear")
const oneBtn = document.querySelector(".one")
const twoBtn = document.querySelector(".two")
const threeBtn = document.querySelector(".three")
const fourBtn = document.querySelector(".four")
const fiveBtn = document.querySelector(".five")
const sixBtn = document.querySelector(".six")
const sevenBtn = document.querySelector(".seven")
const eightBtn = document.querySelector(".eight")
const nineBtn = document.querySelector(".nine")
const zeroBtn = document.querySelector(".zero")
const addBtn = document.querySelector(".add")
const subtractBtn = document.querySelector(".subtract")
const multiplyBtn = document.querySelector(".multiply")
const divideBtn = document.querySelector(".divide")
const screen = document.querySelector(".screen");
const equalBtn = document.querySelector(".equal")

//store the "screen-value" in an array
//will push values to the array after each key is pressed
//then evalute the values within the array 
let screenvalueString = ""
let screenArray = [];

num1 = "";
num2 = "";
operationToUse = ""
function isOperator(){
    if (screenArray.slice(-1) == '+' || screenArray.slice(-1) == '-' || screenArray.slice(-1) == 'x' || screenArray.slice(-1) == '/'){
        return True
    }
    else {
        return false
    }
}
function update_screen(value){
    if ((value == '+' && isOperator()) || (value == '-' && isOperator()) || (value == 'x' && isOperator()) || (value == '/' && isOperator())){
        screenArray.pop()
    }
    if (screenArray.length < 15){
        screenArray.push(value);
        screen.innerHTML = screenArray.join("");
    }
}
function clearScreen(){
    screenArray = [""]
    screen.innerHTML = "0"
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

function add(num1,num2){
    return parseInt(num1) + parseInt(num2)
}
function subtract(num1,num2){
    return parseInt(num1) - parseInt(num2)
}
function multiply(num1,num2){
    return parseInt(num1) * parseInt(num2)
}
function divide(num1,num2){
    return parseInt(num1) / parseInt(num2)
}
oneBtn.addEventListener("click",function(){
    update_screen(1);
})
twoBtn.addEventListener("click",function(){
    update_screen(2);
})
threeBtn.addEventListener("click",function(){
    update_screen(3);
})
fourBtn.addEventListener("click",function(){
    update_screen(4);
})
fiveBtn.addEventListener("click",function(){
    update_screen(5);
})
sixBtn.addEventListener("click",function(){
    update_screen(6);
})
sevenBtn.addEventListener("click",function(){
    update_screen(7);
})
eightBtn.addEventListener("click",function(){
    update_screen(8);
})
nineBtn.addEventListener("click",function(){
    update_screen(9);
})
zeroBtn.addEventListener("click",function(){
    update_screen(0);
})
addBtn.addEventListener("click",function(){
    update_screen('+');
})
subtractBtn.addEventListener("click",function(){
    update_screen("-");
})
multiplyBtn.addEventListener("click",function(){
    update_screen("x");
})
divideBtn.addEventListener("click",function(){
    update_screen("/");
})
clear.addEventListener("click",clearScreen)