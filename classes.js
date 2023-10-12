"use strict";
class Vehicle {
    constructor(color) {
        this.color = color;
    }
    drive() {
        console.log('I am driving');
    }
    startDrawingProcess() {
        this.drive();
    }
    stop() {
        console.log('Stopped');
    }
    beep() {
        console.log('Beep Sound');
    }
}
class Car extends Vehicle {
    constructor(wheels, color) {
        super(color);
        this.wheels = wheels;
    }
    drive() {
        console.log('Car is driving');
    }
    carInfo() {
        console.log(`
        Number of Wheels: ${this.wheels}
        Color: ${this.color}
        `);
    }
}
const vehicle = new Vehicle('Black');
vehicle.startDrawingProcess();
console.log(vehicle.color);
const someCar = new Car(6, 'Silver');
someCar.carInfo();
