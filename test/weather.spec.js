const { assertTrue, assertEquals } = require("../test-framework");
const Weather = require("../src/weather");

// Initial arrange
let testName, weatherTest, expectedOutput, actualOutput, result;

// --- Test 16--- 
// Arrange
testName = `Test 16 = check a new instance of Weather is sunny by default`;
weatherTest = new Weather;

// Act 
actualOutput = weatherTest.isItSunny();

// Assert
result = assertTrue(actualOutput);

// Report 
console.log(`${testName}: ${result ? `PASS` : `FAIL`}`);

// --- Test 17--- 
// Arrange
testName = `Test 17 = check randomWeather() generates a number 0-3`;
weatherTest = new Weather;

// Act 
actualOutput = weatherTest.randomWeather();

// Assert
result = assertTrue(actualOutput <= 3);

// Report 
console.log(`${testName}: ${result ? `PASS` : `FAIL`}`);

testName = `Test 18 = check randomWeather() generates a integer`;
weatherTest = new Weather;

// Act 
actualOutput = weatherTest.randomWeather();

// Assert
result = assertTrue(Number.isInteger(actualOutput));

// Report 
console.log(`${testName}: ${result ? `PASS` : `FAIL`}`);


// --- Test 19--- 
// Arrange
testName = `Test 19 = check setWeather() changes sunny to false if randomWeather() returns 0`;
weatherTest = new Weather;

// Act 
actualOutput = weatherTest.setWeather();
expectedOutput = weatherTest.isItSunny();

// Assert
result = assertEquals(expectedOutput, actualOutput);

// Report 
console.log(`${testName}: ${result ? `PASS` : `FAIL`}`);




