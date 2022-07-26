class Person {
    constructor(name) {
        this._name = name
    }

    // Methods inside of the class
    walk() {
        return `${this._name} are walking`;
    }

    // Getters and Setters
    set name(string) {
        this._name = string;
    }

    get name() {
        return this._name;
    }
};

// Inheritance
class Developer extends Person {
    constructor(name, codeLanguage) {
        // super calling the constructor object of the base class
        super(name);
        this._codeLanguage = codeLanguage;
    }

    code() {
        return `${this._name} are coding in ${this._codeLanguage}`;
    }
};

var p1 = new Person('Gustavo');
console.log(p1.walk());

var dev = new Developer('Mari', 'Javascript');
console.log(dev.code());

var dev2 = new Developer('Sal', 'Ruby');
console.log(dev2.code());

var dev3 = new Developer('Mar', 'SQL');
console.log(dev3.code());
