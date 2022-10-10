const Airport = require("../src/airport");
const { assertTrue, assertFalse } = require("../test-framework");

let actualOutput, testAirport, testName, result;
const weatherTest1 = {
    isItSunny() {
        return true;
    }
};
const weatherTest2 = {
    isItSunny() {
        return false;
    }
};
const plane1 = {
    planeID: `plane1`
};

// --- Test 20--- 
// Arrange
testName = `Test 20 = check checkWeather() returns true when sunny`;
testAirport = new Airport;
input = weatherTest1;
// Act 
actualOutput = (testAirport.checkWeather(input));

// Assert
result = assertTrue(actualOutput);

// Report 
console.log(`${testName}: ${result ? `PASS` : `FAIL`}`);

// --- Test 21--- 
// Arrange
testName = `Test 21 = check checkWeather() returns false when not sunny (stormy)`;
testAirport = new Airport;
input = weatherTest2;
// Act 
actualOutput = testAirport.checkWeather(input);

// Assert
result = assertFalse(actualOutput);

// Report 
console.log(`${testName}: ${result ? `PASS` : `FAIL`}`);

// --- Test 22--- 
// Arrange
testName = `Test 22 = check takeOff() throws an error when it's stormy`;
testAirport = new Airport;
input = plane1;
testAirport.landPlane(input);
testAirport.checkWeather(weatherTest2);

// Act 
actualOutput = testAirport.takeOff(input);

// Assert
result = assertTrue(actualOutput instanceof Error);

// Report 
console.log(`${testName}: ${result ? `PASS` : `FAIL`}`);