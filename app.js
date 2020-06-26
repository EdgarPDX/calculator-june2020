import { add, subt, divider, multiplier } from '../refactor.js';

// get dom elements
// get add-input-1
const addInput1 = document.getElementById('add-input-1');
// get add-input-2
const addInput2 = document.getElementById('add-input-2');
// get add-button
const boogerButton = document.getElementById('add-button');
// get the add-result span
const boogerSpan = document.getElementById('add-result');

// initialize state 

// set the event handler to the button
boogerButton.addEventListener('click', () => {
    // in the click event handler . . .
    // make sure we have the inputs (console.log)
    // make sure we have the span
    // make sure we have the .values of the inputs
    const value1 = addInput1.value;
    const value2 = addInput2.value;

    // add the two values together
    const sum = add(value1, value2);

    // update the textContent of the span
    boogerSpan.textContent = sum;
});


// get dom elements
// get sub-input-1
const subInput1 = document.getElementById('sub-input-1');
// get sub-input-2
const subInput2 = document.getElementById('sub-input-2');
// get sub-button
const subButton = document.getElementById('sub-button');
// get the add-result span
const subSpan = document.getElementById('sub-result');
// initialize state

// set the event handler to the button
subButton.addEventListener('click', () => {
    // make sure we have the .values of the inputs
    const subValue1 = subInput1.value;
    const subValue2 = subInput2.value;
    
    // sub the two values together
    const sub = subt(subValue1, subValue2);
    // update the textContent of the span
    subSpan.textContent = sub;
    

});
const divideInput1 = document.getElementById('divide-input-1');
// get sub-input-2
const divideInput2 = document.getElementById('divide-input-2');
// get sub-button
const divideButton = document.getElementById('divide-button');
// get the add-result span
const divSpan = document.getElementById('divide-result');
// initialize state

// set the event handler to the button
divideButton.addEventListener('click', () => {
    // make sure we have the .values of the inputs
    const divideValue1 = divideInput1.value;
    const divideValue2 = divideInput2.value;
    
    // divide the two values together
    const divide = divider(divideValue1, divideValue2);
    // update the textContent of the span
    divSpan.textContent = divide;
});

const multiInput1 = document.getElementById('multi-input-1');
const multiInput2 = document.getElementById('multi-input-2');
const multiButton = document.getElementById('multi-button');
const multiSpan = document.getElementById('multi-result');

multiButton.addEventListener('click', () => {
    const multiValue1 = multiInput1.value;
    const multiValue2 = multiInput2.value;

    const multiply = multiplier(multiValue1, multiValue2);
    multiSpan.textContent = multiply;
});