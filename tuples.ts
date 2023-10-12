


const drink = {
    color: 'brown',
    carbonated: true,
    sugar: 40
};

type Drink = [string, boolean, number];

const someDrink:[string, boolean, number] = ['brown', true, 40];
const coffee: Drink = ['brown', false, 0];

const coffeeObj = {
    color: coffee[0],
    carbonated: coffee[1],
    sugar: coffee[2]
}
console.log(coffeeObj);

//someDrink[1] = 'black'; error


