const { assertTrue, assertFalse } = require("../test-framework");
const Airport = require("../src/airport")

// Initial arrange
let result, actualOutput, input1, input2, testName, airportTest;
const plane1 = {
    planeID: `plane1`
};
const plane2 = {
    planeID: `plane2`
};

//  ---Test 5--- 
// Arrange
testName = `Test 5 = check an instance of plane can't be added to landedPlanes when the airport is at capacity`;
airportTest = new Airport;
input1 = plane1;
input2 = plane2;
airportTest.setCapacity(1);
airportTest.landPlane(input1);

// Act 
airportTest.landPlane(input2);
actualOutput = airportTest.getLandedPlanes().includes(input2.planeID);


// Assert
result = assertFalse(actualOutput);

// Report 
console.log(`${testName}: ${result ? `PASS` : `FAIL`}`);

//  ---Test 6--- 
// Arrange
testName = `Test 6 = check an instance of plane can't be added to landedPlanes when the airport is at capacity. Throw error message in that case`;
airportTest = new Airport;
input1 = plane1;
input2 = plane2;
airportTest.setCapacity(1);
airportTest.landPlane(input1);

// Act 
actualOutput = airportTest.landPlane(input2);

// Assert
result = assertTrue(actualOutput instanceof Error);

// Report 
console.log(`${testName}: ${result ? `PASS` : `FAIL`}`);