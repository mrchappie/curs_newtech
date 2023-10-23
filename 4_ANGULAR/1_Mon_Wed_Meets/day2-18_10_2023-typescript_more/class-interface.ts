class Parent {
  public publicP = 'PUBLIC';
  protected protectedP = 'PROTECTED';
  private privateP = 'PRIVATE';

  name: string;

  constructor(name: string) {
    this.name = name;
  }

  greeting(): void {
    console.log('Hello from', this.name, this.privateP);
  }
}

class Child extends Parent {
  nickName: string;

  constructor(name: string, nickName: string) {
    super(name);
    this.nickName = nickName;
  }

  test() {
    this.publicP;
    this.protectedP;
    // this.privateP;
  }
}

let child: Child = new Child('Jim', 'Jimmy');
child.greeting();

child.publicP;
// child.protectedP;
// child.privateP;

interface Greeter {
  greeting: 'Hello' | 'Hi' | 'Salutations';
  greet: () => void;
}

interface Sleeper {
  sleep: () => void;
}

abstract class Being {
  abstract name: string;
  race = 'Human';

  live() {
    console.log(`${this.name} is livin' la Vida Loca`);
  }

  abstract getName(): string;
}

class Person2 extends Being implements Greeter, Sleeper {
  readonly greeting = 'Hello';

  constructor(public name: string) {
    super();
  }

  getName(): string {
    return this.name;
  }

  greet() {
    console.log(`${this.greeting} from ${this.name}`);
  }

  sleep() {
    console.log(`${this.name} zzzZZZZzzzzZZZ..`);
  }
}

let p: Person2 = new Person2('Mary');
p.greet();
p.sleep();
