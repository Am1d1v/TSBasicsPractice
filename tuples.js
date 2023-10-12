"use strict";
const drink = {
    color: 'brown',
    carbonated: true,
    sugar: 40
};
const someDrink = ['brown', true, 40];
const coffee = ['brown', false, 0];
const coffeeObj = {
    color: coffee[0],
    carbonated: coffee[1],
    sugar: coffee[2]
};
console.log(coffeeObj);
//someDrink[1] = 'black'; error
