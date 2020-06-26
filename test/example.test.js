// IMPORT MODULES under test here:
// import example from '../example.js';

import { add, subt, divider, multiplier } from '../refactor.js';

const test = QUnit.test;

test('add', (expect) => {
    //Arrange
    // Set up your arguments and expectations
    const firstNum = 3;
    const secNum = 3;
    const expected = 6;
    //Act 
    // Call the function you're testing and set the result to a const
    const actual = add(firstNum, secNum);

    //Expect
    // Make assertions about what is expected versus the actual result
    expect.equal(actual, expected);
});

test('subt', (expect) => {
    //Arrange
    // Set up your arguments and expectations
    const firstNum = 4;
    const secNum = 3;
    const expected = 1;
    //Act 
    // Call the function you're testing and set the result to a const
    const actual = subt(firstNum, secNum);

    //Expect
    // Make assertions about what is expected versus the actual result
    expect.equal(actual, expected);
});

test('divider', (expect) => {
    //Arrange
    // Set up your arguments and expectations
    const firstNum = 12;
    const secNum = 3;
    const expected = 4;
    //Act 
    // Call the function you're testing and set the result to a const
    const actual = divider(firstNum, secNum);

    //Expect
    // Make assertions about what is expected versus the actual result
    expect.equal(actual, expected);
});
test('multiplier', (expect) => {
    //Arrange
    // Set up your arguments and expectations
    const firstNum = 4;
    const secNum = 6;
    const expected = 24;
    //Act 
    // Call the function you're testing and set the result to a const
    const actual = multiplier(firstNum, secNum);

    //Expect
    // Make assertions about what is expected versus the actual result
    expect.equal(actual, expected);
});