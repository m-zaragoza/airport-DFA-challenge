class Airport {
  #landedPlanes = [];
  #capacity = 100;
  #forecast;

  checkWeather = weather => this.#forecast = weather.isItSunny();

  landPlane = inputPlane1 =>
    this.#landedPlanes.includes(inputPlane1) ? new Error(`${inputPlane1.planeID} already at airport.`) :
      this.#capacity > this.#landedPlanes.length ? this.#landedPlanes.push(inputPlane1)
        : new Error(`Abort landing, airport at capacity.`);

  takeOff = inputPlane2 =>
    this.#landedPlanes.includes(inputPlane2) ?
      this.#landedPlanes = this.#landedPlanes.filter(planes => planes !== inputPlane2)
      : new Error(`${inputPlane2.planeID} is not at this airport.`);

  getLandedPlanes = () => this.#landedPlanes;

  getCapacity = () => this.#capacity;

  setCapacity = newCapacity => this.#capacity = newCapacity;
}

module.exports = Airport;


