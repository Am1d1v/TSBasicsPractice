"use strict";
/*
import axios from "axios";




 function getData(number: number){
    const url = `https://jsonplaceholder.typicode.com/todos/${number}`;

    interface ToDo {
        id: number;
        title: string;
        completed: boolean;
    }

axios.get(url)
.then(response => {
    const todo= response.data as ToDo;
    const {id, title, completed} = todo;

    logTODo(id, title, completed)
})

const logTODo = (id: number, title: string, completed:boolean) => {
    console.log(`
        id: ${id},
        title: ${title},
        completed: ${completed}
    `)
}
 }

getData(1);
getData(10);

*/
// Annotation
/*
let count: number = 5;
count = 10;

let hasPet: boolean = true;
let nothing: null = null;

let now: Date = new Date();

let colors: string[] = ['Black', 'Pink'];
let numbers: number[] = [1, 2, 3];
let results: boolean[] = [true, false, true];


class Car {


}

let car: Car = new Car();


let point: {x: number; y: number} = {
    x: 10,
    y: 10
}
*/
// Functions
/*const logNumber: (i: number) => void = (i: number)=> {
    console.log(i * 2);
}

logNumber(10);
*/
// When to use type annotations:
//1) Function return the 'any' type
const json = '{"Name": "userName", "Age": 30}';
const user = JSON.parse(json);
console.log(user);
