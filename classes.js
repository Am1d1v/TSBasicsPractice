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
    drive() {
        console.log('Car is driving');
    }
}
const vehicle = new Vehicle('Black');
vehicle.startDrawingProcess();
console.log(vehicle.color);
//const someCar = new Car();
//someCar.drive();
