"use strict";
// Bad Practice
/*
const car = {
    name: 'CarName',
    year: 2000,
    broken: true
}

const printVehicle = (vehicle: {name: string; year: number; broken: boolean}): void => {
        console.log(`Name: ${vehicle.name}`);
        console.log(`Year: ${vehicle.year}`);
        console.log(`Broken: ${vehicle.broken}`);
}
printVehicle(car);
*/
const car = {
    name: 'CarName',
    year: 2000,
    broken: true
};
const printVehicle = (vehicle) => {
    console.log(`Name: ${vehicle.name}`);
    console.log(`Year: ${vehicle.year}`);
    console.log(`Broken: ${vehicle.broken}`);
};
printVehicle(car);
