class Singleton {
  readonly id = Math.trunc(Math.random() * 10 ** 5);

  private static INSTANCE?: Singleton;

  private constructor() {
    console.log('singleton instance:', this.id);
  }

  static getInstance(): Singleton {
    if (!Singleton.INSTANCE) {
      Singleton.INSTANCE = new Singleton();
    }

    console.log('Returned Singleton:', Singleton.INSTANCE.id);
    return Singleton.INSTANCE;
  }
}

let s1 = Singleton.getInstance(),
  s2 = Singleton.getInstance();
