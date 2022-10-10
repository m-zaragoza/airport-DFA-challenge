// Use this document to call all the functions and provide outcomes
const Airport = require("./src/airport");
const Plane = require("./src/plane");
const Weather = require("./src/weather");

class Main {
    static main() {
        const manchesterAirport = new Airport;

        const bA1 = new Plane(`BA1`);
        const bA2 = new Plane(`BA2`);

        const todaysWeather = new Weather;

        manchesterAirport.setCapacity(1);
        console.log(`MAN has a capacity of ${manchesterAirport.getCapacity()}.`)

        manchesterAirport.landPlane(bA1);
        console.log(manchesterAirport.landPlane(bA1));
        console.log(manchesterAirport.landPlane(bA2));
        console.log(manchesterAirport.takeOff(bA2));
        console.log(`Is flight ${bA1.planeID} at Manchester Airport? ${bA1.isAtAirport(manchesterAirport)}`);

        todaysWeather.setWeather();
        console.log(`Is it sunny today? ${todaysWeather.isItSunny()}.`);
    }
}
Main.main();