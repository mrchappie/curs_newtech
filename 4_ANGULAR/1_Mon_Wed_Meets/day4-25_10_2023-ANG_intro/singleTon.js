class Singleton {
    constructor() {
        this.id = Math.trunc(Math.random() * Math.pow(10, 5));
        console.log('singleton instance:', this.id);
    }
    static getInstance() {
        if (!Singleton.INSTANCE) {
            Singleton.INSTANCE = new Singleton();
        }
        console.log('Returned Singleton:', Singleton.INSTANCE.id);
        return Singleton.INSTANCE;
    }
}
let s1 = Singleton.getInstance(), s2 = Singleton.getInstance();
