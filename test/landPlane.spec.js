const { assertEquals } = require("../test-framework");
const Airport = require("../src/airport");

// Initial arrange
let expectedOutput, actualOutput, result, input, testName, airportTest;
const plane1 = {
    planeID: `plane1`
};

//  ---Test 1--- 
// Arrange
testName = `Test 1 = landPlane() adds one plane to the landedPlanes array- check the input matches what's added`;
airportTest = new Airport;
input = plane1;
expectedOutput = plane1;

// Act 
airportTest.landPlane(input);
actualOutput = airportTest.getLandedPlanes()[0];

// Assert
result = assertEquals(expectedOutput, actualOutput);

// Report 
console.log(`${testName}: ${result ? `PASS` : `FAIL`}`);

//  ---Test 2---
// Arrange
testName = `Test 2 = landPlane() adds one plane to the landedPlanes array- check array.length increases`;
airportTest = new Airport;
input = plane1;
expectedOutput = 1;

// Act 
airportTest.landPlane(input);
actualOutput = airportTest.getLandedPlanes().length;

// Assert
result = assertEquals(expectedOutput, actualOutput);

// Report 
console.log(`${testName}: ${result ? `PASS` : `FAIL`}`);




