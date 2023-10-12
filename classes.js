"use strict";
class Vehicle {
    drive() {
        console.log('I am driving');
    }
    startDrawingProcess() {
        this.drive();
    }
    stop() {
        console.log('Stopped');
    }
}
class Car extends Vehicle {
    drive() {
        console.log('Car is driving');
    }
}
const vehicle = new Vehicle();
vehicle.startDrawingProcess();
const someCar = new Car();
someCar.drive();
