// Write your code here:
//takes in name, breed, and weight
function dogFactory(name, breed, weight) {
    return {
        //sets the original properties
        _name: name,
        _breed: breed,
        _weight: weight,

        //getters for name, breed, and weight
        get name() {
            return this._name;
        },

        get breed() {
            return this._breed;
        },

        get weight() {
            return this._weight;
        },

        //setters for name, breed, and weight
        set name(name) {
            this._name = name;
        },

        set breed(breed) {
            this._breed = breed;
        },

        set weight(weight) {
            this._weight = weight;
        },

        //bark method to return 'ruff! ruff!'
        bark() {
            return 'ruff! ruff!';
        },

        //eatTooManyTreats method to increment weight per treat eaten
        eatTooManyTreats() {
            this.weight++;
        }
    };
}

//instantiating Lilo, a dog object using the factory
let lilo = dogFactory('Lilo', 'chihuahua', 11);
console.log(lilo.bark());

//checking that eatTooManyTreats method works
console.log(lilo.weight);
lilo.eatTooManyTreats();
console.log(lilo.weight);
