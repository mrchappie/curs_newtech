/**
 * Ex 1:
        Define a Plane class with the following properties:
        - id - string property set in constructor
        - isFlying - Boolean property, initial value is false
        - takeoff - method, set isFlying to true, logs "Flight <id> is taking off"
        - land - method, set isFlying to false, logs "Flight <id> is landing"

        Define a subclass PortablePlane which inherits the Plane class and adds the following:
        - areWingsFolded - Boolean property, initial value is true
        - foldWings - method, sets areWingsFolded to true, logs "Flight <id> is folding its wings"
        - unfoldWings - method, sets areWingsFolded to false, logs "Flight <id> is unfolding its wings"
        In addition before taking off it needs to unfold the wings, and fold the wings after landing.

        BONUS: make the id property private, but still accessible to PortablePlane
 */

class Plane {
  constructor(isFlying = false) {
    this.id = Math.floor(Math.random() * 1000);
    this.isFlying = isFlying;
  }

  takeOff() {
    this.isFlying = true;
    console.log(`Flight ${this.id} is taking off.`);
  }

  land() {
    this.isFlying = false;
    console.log(`Flight ${this.id} is landing.`);
  }
}

class PortablePlane extends Plane {
  constructor(areWingsFolded = true) {
    super();
    this.areWingsFolded = areWingsFolded;
  }

  foldWings() {
    this.areWingsFolded = true;
    console.log(`Flight ${this.id} is folding its wings.`);
  }

  unfoldWings() {
    this.areWingsFolded = false;
    console.log(`Flight ${this.id} is unfolding its wings.`);
  }
}

const plane = new Plane();
console.log(plane);

const portablePlane = new PortablePlane();
console.log(portablePlane);

/**
 * Ex2:
        Make a CappedArray care sa functioneze ca un array limitat la o anumita capacitate, care sa fie stocata intr-o proprietate static numita CAPACITY. Ex functionare:
        let arr = new CappedArray(1,2,3,4,5,6); //Array at full capacity. Ignored 6
        console.log(arr); // CappedArray(5) [1,2,3,4,5]
        arr = new CappedArray(1,2,3,4,5,6, 7, 8); //Array at full capacity. Ignored 6, 7, 8
        console.log(arr); // CappedArray(5) [1,2,3,4,5]
        arr = new CappedArray(1, 2, 3);
        arr.push(4, 5, 6); //Array at full capacity. Ignored 6
 */
