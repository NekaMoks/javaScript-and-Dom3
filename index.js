 //First we will declear a variable to get a display(screen) with the class name
const display = document.querySelector('.display')
//Then we declear a variable to get the buttons with the class name and the children
const controlButtons = document.querySelector('.controls').children
// We want the calculator to be able differenciate between symbols when the user clicks on them
const allSymbols = ['+', '-', 'x', '/', '=', '.', 'C']

let firstValue = ''
let secondValue = ''
let symbol = ''
let result= ''

function  calculate(){
    firstValue = parseFloat(firstValue)
    secondValue = parseFloat(secondValue)


    if(symbol==="+") result = firstValue + secondValue
    if(symbol==="-") result = firstValue - secondValue
    if(symbol==="x") result = firstValue * secondValue
    if(symbol==="/") result = firstValue / secondValue

    display.innerText = result
    firstValue = result
    secondValue = ""
}

//Next line of action, is to be able to display something on the screen when a button is clicked
//1. First we loop through all the buttons of the controlButtons
//2. Then add an event listener to click and create an anonymous function.
//3. Now let's destructure button.innerText and give it a variable name
//4. Then we get a way of seperating the values in lines 8 to 10
for (let button of controlButtons) {
    button.addEventListener('click', () => {
        const { innerText: btnValue } = button
        
        
        //If the value of the button is found in the all symbols array, then it is a button
        const btnValueIsSymbol = allSymbols.includes(btnValue)
        
        /** If an individual types a first value and then clicks a symbol, symbol should be a button. 
        This is because sa user might want to type -9 as the first value, so we want to tell javaScript that it is not a symbol at that point but
        only part of the first value **/
        if (btnValueIsSymbol && firstValue) {
            secondValue && calculate()
            symbol = btnValue
        }

        //If there is no symbol then the user is still typing the first value
        else if (!symbol) firstValue += btnValue
        //If there is a symbol then the user is typing the second value
        else if (symbol) secondValue += btnValue
       
        if (btnValue === 'C') {
            firstValue = ""
            secondValue = ""
            symbol = ""
            result = ""
            display.innerText = ""
        } else {
            if (btnValue !== '=') {
                    //Let the display show the text of any button that is clicked
                    //Notice that when we click on 5 and then we click on 6; 5 disappears but we want 5 and 6 to be diplayed simultaneously. So we fix that with +
                display.innerText += btnValue
            }
        }
    })
}