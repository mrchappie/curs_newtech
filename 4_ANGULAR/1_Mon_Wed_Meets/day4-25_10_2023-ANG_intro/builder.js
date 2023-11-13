var Building = /** @class */ (function () {
    function Building() {
        this.floors = ['landing'];
    }
    return Building;
}());
var BuilderImpl = /** @class */ (function () {
    function BuilderImpl() {
        this.building = new Building();
    }
    BuilderImpl.prototype.build = function () {
        return this.building;
    };
    BuilderImpl.prototype.walls = function (count) {
        this.building.walls = count;
        return this;
    };
    BuilderImpl.prototype.doors = function (count) {
        this.building.doors = count;
        return this;
    };
    BuilderImpl.prototype.roof = function (type) {
        this.building.roof = type;
        return this;
    };
    BuilderImpl.prototype.addFloor = function () {
        this.building.floors.push(this.building.floors.length.toString());
        return this;
    };
    return BuilderImpl;
}());
var shed = new BuilderImpl().walls(4).doors(1).roof('flat').build();
console.log(shed);
