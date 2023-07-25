let runningTotal = 0;
//keep track of the numbers added to the screen eg. 5 + 5, runningTotal will keep track of the first 5 initialized to the screen.
let numberOnScreen = "0";
//what will be on the screen is always a string
let previousOperator = null;
//keeping track of the operators like the signs +, _ etc
// ÷ -
  
const screen = document.querySelector('.screen');
//call the screen

//write a function when a user clicks one of the buttons,take in the values in the calculator as the parameter.

//the if statement is checking the number clicked if it is a number or a symbol.
function buttonClick(value){
   if(isNaN(value)){
    //this is not a number (symbole/ handle with number)
    handleSymbol(value);
   }else{
    handleNumber(value);
   }
   screen.innerText = numberOnScreen;
}

function handleSymbol(symbol){
switch(symbol){
    case 'C':
        numberOnScreen = '0'
        runningTotal = 0;
        break;
        case '=':
        if(previousOperator === null){
        //you need two numbers to do math
          return  
        }flushOperation(parseInt(numberOnScreen));
        previousOperator = null;
        numberOnScreen = runningTotal;
        runningTotal = 0;
        break;
        case'←':
        if (numberOnScreen.length === 1){
            numberOnScreen = '0';
        }else{numberOnScreen = numberOnScreen.substring(0, numberOnScreen.length -1);
        }
        break;
        case '+':
        case '−':
        case '×':
        case '÷':
        handleMath(symbol);
        break;

}
}
//this function hpapens when the +,-,*,/ happens
function handleMath(symbol){
  if (numberOnScreen === "0" ){
    //do nothing
    return;
  }  
  const intNumberOnScreen = parseInt(numberOnScreen);
  if (runningTotal === 0){
    runningTotal = intNumberOnScreen;
  }else{
    flushOperation(intNumberOnScreen);
  }
  previousOperator = symbol;
  numberOnScreen = '0';
}

function flushOperation(intNumberOnScreen){
    if (previousOperator === '+'){
        runningTotal += intNumberOnScreen
    }else if (previousOperator === '-'){
        runningTotal -= intNumberOnScreen;
    }else if (previousOperator === '×' ){
        runningTotal *= intNumberOnScreen;
    }else { 
        runningTotal /= intNumberOnScreen;
    }
}
//handleNumbers allow the click function click and display on screen.
//this function displays the numbers on the button in the screen
function handleNumber(numberString){
 if (numberOnScreen === "0"){ 
    numberOnScreen = numberString;  
}else{
    numberOnScreen += numberString;
}

}
//function get called once and set everything, feature document, set eventlistener. determine what happens when you click the buttons on the calculator

function init(){
document.querySelector('.calc-buttons').addEventListener('click', function(event){
buttonClick(event.target.innerText)
})
}
init();