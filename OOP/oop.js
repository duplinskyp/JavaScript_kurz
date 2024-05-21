class Osoba {
    constructor(meno, vek) {
        this.meno = meno;
        this.vek = vek;
    }

    vypis() {
        console.log(`Meno: ${this.meno}, Vek: ${this.vek}`);
    }
}

const osoba = new Osoba("Janko", 25);
osoba.vypis();
