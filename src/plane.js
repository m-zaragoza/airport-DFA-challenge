class Plane {
    constructor(planeID) {
        this.planeID = planeID;
    }

    isAtAirport = airport => {
        if (airport.getLandedPlanes().length === 0) {
            return false;
        }
        for (let i = 0; i < airport.getLandedPlanes().length; i++) {
            return (airport.getLandedPlanes()[i].planeID === this.planeID) ? true : false;
        }
    }
}

module.exports = Plane 
