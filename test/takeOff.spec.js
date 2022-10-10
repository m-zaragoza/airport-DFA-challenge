const { assertEquals, assertFalse } = require("../test-framework");
const Airport = require("../src/airport")
// Initial arrange
let expectedOutput, actualOutput, result, input, testName, airportTest;
const plane1 = {
    planeID: `plane1`
};

//  ---Test 7--- 
// Arrange
testName = `Test 7 = check takeOff() removes a plane from the landedPlanes array- array.length reduces by one`;
airportTest = new Airport;
input = plane1;
airportTest.setCapacity(1);
airportTest.landPlane(input);
expectedOutput = 0;

// Act 
airportTest.takeOff(input);
actualOutput = airportTest.getLandedPlanes().length;

// Assert
result = assertEquals(expectedOutput, actualOutput);

// Report 
console.log(`${testName}: ${result ? `PASS` : `FAIL`}`);

//  ---Test 8--- 
// Arrange
testName = `Test 8 = check takeOff() removes the intended plane from the landedPlanes array- the plane is no longer in the array`;
airportTest = new Airport;
input = plane1;
airportTest.setCapacity(1);
airportTest.landPlane(input);

// Act 
airportTest.takeOff(input);
actualOutput = airportTest.getLandedPlanes().includes(input);

// Assert
result = assertFalse(actualOutput);

// Report 
console.log(`${testName}: ${result ? `PASS` : `FAIL`}`);

//  ---Test 9--- 
// Arrange
testName = `Test 9 = check takeOff() returns landedPlanes without the plane that took off`;
airportTest = new Airport;
input = plane1;
airportTest.setCapacity(1);
airportTest.landPlane(input);

// Act 
actualResult = airportTest.takeOff(input).includes(input);

// Assert
result = assertFalse(actualResult);

// Report 
console.log(`${testName}: ${result ? `PASS` : `FAIL`}`);
