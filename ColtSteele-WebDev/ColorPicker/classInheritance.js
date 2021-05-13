class Pet {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    eat() {
        return `${this.name} is eating`;
    }
}

//runs the constructor from Pet and gives the Pet method to Class
//super references the constructor from the Parent class
class Cat extends Pet {
    constructor(name, age, livesLeft = 9) {
        super(name, age);
        this.livesLeft = livesLeft;
    }
    meow() {
        return `MEOWWWW`;
    }
}

const monty = new Cat('monty', 9);
console.log(monty.eat());

class Dog extends Pet {
    bark() {
        return 'WOOOF';
    }
}
