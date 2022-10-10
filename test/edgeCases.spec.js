const { assertEquals, assertTrue } = require("../test-framework")
const Airport = require("../src/airport")

// Initial arrange
let testName, airportTest, input, expectedOutput, actualOutput, result;
const plane1 = {
    planeID: `plane1`
};

//  ---Test 13--- 
// Arrange
testName = `Test 13 = check a plane can't land if it's already at the airport- it throws an error message`;
airportTest = new Airport;
input = plane1;
airportTest.setCapacity(1);

// Act 
airportTest.landPlane(input);
actualOutput = airportTest.landPlane(input);

// Assert
result = assertTrue(actualOutput instanceof Error);

// Report 
console.log(`${testName}: ${result ? `PASS` : `FAIL`}`);

//  ---Test 14--- 
// Arrange
testName = `Test 14 = check a plane can't land if it's already at the airport- check array.length doesn't increase`;
airportTest = new Airport;
input = plane1;
expectedOutput = 1;
airportTest.setCapacity(1);

// Act 
airportTest.landPlane(input);
airportTest.landPlane(input);
actualOutput = airportTest.getLandedPlanes().length;

// Assert
result = assertEquals(expectedOutput, actualOutput);

// Report 
console.log(`${testName}: ${result ? `PASS` : `FAIL`}`);

//  ---Test 15--- 
// Arrange
testName = `Test 15 = check a plane that is not at the airport can't take off- throw error`;
airportTest = new Airport;
input = plane1;

// Act 
actualOutput = airportTest.takeOff(input);

// Assert
result = assertTrue(actualOutput instanceof Error);

// Report 
console.log(`${testName}: ${result ? `PASS` : `FAIL`}`);




