interface I {
  prop1: string;
  prop2: number;
  prop3: boolean;

  method1(): void;
  method2(param1: string, param2: number): boolean;
}

abstract class AC {
  prop1: string;
  prop2: number = 0;

  abstract prop3: boolean;

  method1(): void {
    // do stuff
  }

  abstract method2(param1: string, param2: number): boolean;
}

class C {
  prop1: string;
  prop2: number = 0;
  prop3: boolean = false;

  method1(): void {
    // do stuff
  }
  method2(param1: string, param2: number): boolean {
    return param1 === param2.toString();
  }
}

// let i = new I(),
//   ac = new AC(),
//   cls = new C();

interface Swimmer {
  waterSpeed: number;
  swim: (depth: number) => void;
}

interface Flier {
  maxAltitude: number;
  fly: (source: string, destination: string) => void;
}

abstract class Animal {
  constructor(public name: string, public species: string, public dob: Date) {}

  getTag(): string {
    return `A ${this.species} names ${this.name}`;
  }

  abstract getAge(): number;
}

abstract class Bird extends Animal implements Flier {
  maxAltitude: number;

  constructor(name: string, dob: Date) {
    super(name, 'bird', dob);
  }

  fly(source: string, destination: string): void {
    console.log(`${this.getTag()} is flying from ${source} to ${destination}`);
  }
}
