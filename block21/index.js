// index.js

// Define the Car constructor function
function Car(make, model, year) {
    this.make = make;
    this.model = model;
    this.year = year;
}

// Add the getDescription method to the Car prototype
Car.prototype.getDescription = function() {
    return `${this.year} ${this.make} ${this.model}`;
};

// Define the ElectricCar constructor function as a subclass of Car
function ElectricCar(make, model, year, range) {
    // Call the parent constructor function
    Car.call(this, make, model, year);

    // Add the range property
    this.range = range;
}

// Set up ElectricCar to inherit from Car
ElectricCar.prototype = Object.create(Car.prototype);

// Correct the constructor pointer because it points to Car
ElectricCar.prototype.constructor = ElectricCar;

// Override the getDescription method
ElectricCar.prototype.getDescription = function() {
    // Call the parent method
    const parentDescription = Car.prototype.getDescription.call(this);

    // Add information about the range
    return `${parentDescription}, with a range of ${this.range} miles`;
};

// Create an instance of ElectricCar
const myCar = new ElectricCar("Tesla", "Model S", 2019, 300);

// Call the getDescription method
console.log(myCar.getDescription());
