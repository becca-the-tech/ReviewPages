//creates the menu object, with a _courses property, getters and setters of each course type, getter of _courses, and methods to addDishToMeal, getRandomDishFromMeal, and generateRandomMeal
const menu = {
    _courses: {
        appetizers: [],
        mains: [],
        desserts: []
    },

    //appetizers getter and setter
    get appetizers() {
        return this._courses.appetizers;
    },

    set appetizers(data) {
        this._courses.appetizers = data;
    },

    //mains getter and setter
    get mains() {
        return this._courses.mains;
    },

    set mains(data) {
        this._courses.mains = data;
    },

    //desserts getter and setter
    get desserts() {
        return this._courses.desserts;
    },

    set desserts(data) {
        this._courses.desserts = data;
    },

    //_courses getter
    get courses() {
        return {
            appetizers: this.appetizers,
            mains: this.mains,
            desserts: this.desserts
        };
    },

    //adds a dish to specific course and creates object of dish with its name and price
    addDishToCourse(courseName, dishName, dishPrice) {
        const dish = {
            name: dishName,
            price: dishPrice
        };
        this._courses[courseName].push(dish);
    },

    //choose which course and pick a random item from that course
    getRandomDishFromCourse(courseName) {
        const dishes = this._courses[courseName];
        const randomIndex = Math.floor(Math.random() * dishes.length);
        return dishes[randomIndex];
    },

    //method to generate a random three-course meal and calculate price
    generateRandomMeal() {
        const appetizer = this.getRandomDishFromCourse('appetizers');
        const main = this.getRandomDishFromCourse('mains');
        const dessert = this.getRandomDishFromCourse('desserts');
        let totalPrice = appetizer.price + main.price + dessert.price;

        return `Your three course meal:
        Appetizer: ${appetizer.name}
        Main: ${main.name}
        Dessert: ${dessert.name}

     Total Price: $${totalPrice}`;
    }
};

//adds appetizers to menu
menu.addDishToCourse('appetizers', 'Mozzarella Sticks', 7.99);
menu.addDishToCourse('appetizers', 'Loaded Fries', 9.99);
menu.addDishToCourse('appetizers', 'Pretzel Bites', 5.99);

//adds mains to menu
menu.addDishToCourse('mains', 'Chicken Alfredo Pasta', 13.99);
menu.addDishToCourse('mains', 'Pepperoni Pizza', 15.99);
menu.addDishToCourse('mains', 'Caesar Salad', 7.99);

//adds desserts to menu
menu.addDishToCourse('desserts', 'Pizookie', 4.99);
menu.addDishToCourse('desserts', 'Chocolate Lava Cake', 5.99);
menu.addDishToCourse('desserts', 'Oreo Cheesecake', 8.99);

//generates the meal and logs to console
let meal = menu.generateRandomMeal();
console.log(meal);
