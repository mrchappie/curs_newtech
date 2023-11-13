var Truck = /** @class */ (function () {
    function Truck() {
    }
    Truck.prototype.deliver = function (cargo) {
        console.log('The truck delivered the cargo:', cargo);
    };
    return Truck;
}());
var Boat = /** @class */ (function () {
    function Boat() {
    }
    Boat.prototype.deliver = function (cargo) {
        console.log('The boat delivered the cargo:', cargo);
    };
    return Boat;
}());
var Plane = /** @class */ (function () {
    function Plane() {
    }
    Plane.prototype.deliver = function (cargo) {
        console.log('The plane delivered the cargo:', cargo);
    };
    return Plane;
}());
var TransportFactory = /** @class */ (function () {
    function TransportFactory() {
    }
    TransportFactory.prototype.createTransport = function (type) {
        switch (type) {
            case 'truck':
                return new Truck();
            case 'boat':
                return new Boat();
            case 'plane':
                return new Plane();
            default:
                return new Truck();
        }
    };
    return TransportFactory;
}());
var factory = new TransportFactory();
factory.createTransport('truck').deliver('milk');
factory.createTransport('boat').deliver('fish');
factory.createTransport('plane').deliver('ammo');
