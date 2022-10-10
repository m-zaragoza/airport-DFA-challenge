const { assertTrue, assertFalse } = require("../test-framework");
const Plane = require("../src/plane");

// Initial arrange
let actualOutput, result, testName, planeTest;

//  ---Test 10--- 
// Arrange
testName = `Test 10 = check isAtAirport()returns true when a plane is at the airport`;
planeTest = new Plane('planeTest');
const testAirport = {
    getLandedPlanes() {
        return [planeTest];
    }
}

// Act 
actualOutput = planeTest.isAtAirport(testAirport);


// Assert
result = assertTrue(actualOutput);

// Report 
console.log(`${testName}: ${result ? `PASS` : `FAIL`}`);

//  ---Test 11--- 
// Arrange
testName = `Test 11 = check isAtAirport()returns false when a plane is not at the airport- some elements in array`;
planeTest = new Plane('planeTest');
let planeTest2 = new Plane('p2')
const testAirport2 = {
    getLandedPlanes() {
        return [planeTest2];
    }
}

// Act 
actualOutput = planeTest.isAtAirport(testAirport2);

// Assert
result = assertFalse(actualOutput);

// Report 
console.log(`${testName}: ${result ? `PASS` : `FAIL`}`);

//  ---Test 12--- 
// Arrange
testName = `Test 12 = check isAtAirport()returns false when a plane is not at the airport- the array is empty`;
planeTest = new Plane('planeTest');
const testAirport3 = {
    getLandedPlanes() {
        return [];
    }
}

// Act 
actualOutput = planeTest.isAtAirport(testAirport3);

// Assert
result = assertFalse(actualOutput);

// Report 
console.log(`${testName}: ${result ? `PASS` : `FAIL`}`);
