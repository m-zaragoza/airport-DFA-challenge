const Airport = require("../src/airport")
const { assertEquals } = require("../test-framework")

// Initial arrange
let expectedOutput, actualOutput, result, input, testName, airportTest;

//  ---Test 3--- 
// Arrange
testName = `Test 3 = check new instances of airport are created with default capacity of 100`;
airportTest = new Airport;
expectedOutput = 100;

// Act 
actualOutput = airportTest.getCapacity();

// Assert
result = assertEquals(expectedOutput, actualOutput);

// Report 
console.log(`${testName}: ${result ? `PASS` : `FAIL`}`);

//  ---Test 4--- 
// Arrange
testName = `Test 4 = check setCapacity() changes the default capacity to the desired one`;
airportTest = new Airport;
input = 200;
expectedOutput = input; //Find out if expectedOutput = 200; would be preferable

// Act 
actualOutput = airportTest.setCapacity(input);

// Assert
result = assertEquals(expectedOutput, actualOutput);

// Report 
console.log(`${testName}: ${result ? `PASS` : `FAIL`}`);


