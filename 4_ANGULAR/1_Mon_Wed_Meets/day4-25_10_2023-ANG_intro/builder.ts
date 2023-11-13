class Building {
  walls: number;
  doors: number;
  windows: number;
  roof: string;
  floors: string[] = ['landing'];
  pool?: boolean;
  floorHeating?: boolean;
  ac?: boolean;
}

// new Builder(4, 1, 0, 'flat', null, undefined, undefined, undefined, ...)
// new Builder(4, 1, 0, 'flat', null, undefined, undefined, undefined, ..., /*ac:*/, true)

interface Builder {
  build(): Building;
  walls(count: number): Builder;
  doors(count: number): Builder;
  roof(type: string): Builder;
  addFloor(): Builder;
}

class BuilderImpl implements Builder {
  private building: Building;

  constructor() {
    this.building = new Building();
  }

  build(): Building {
    return this.building;
  }

  walls(count: number): Builder {
    this.building.walls = count;
    return this;
  }

  doors(count: number): Builder {
    this.building.doors = count;
    return this;
  }

  roof(type: string): Builder {
    this.building.roof = type;
    return this;
  }

  addFloor(): Builder {
    this.building.floors.push(this.building.floors.length.toString());
    return this;
  }
}

let shed = new BuilderImpl().walls(4).doors(1).roof('flat').build();

console.log(shed);
