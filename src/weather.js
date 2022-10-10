class Weather {
    #sunny = true;

    randomWeather = () => Math.floor(Math.random() * 3);

    setWeather = () =>
        this.randomWeather() === 0 ? this.#sunny = false : this.#sunny = true;

    isItSunny = () => this.#sunny;

}

module.exports = Weather;