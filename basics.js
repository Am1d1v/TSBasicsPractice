"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const axios_1 = __importDefault(require("axios"));
function getData(number) {
    const url = `https://jsonplaceholder.typicode.com/todos/${number}`;
    axios_1.default.get(url)
        .then(response => {
        const todo = response.data;
        const { id, title, completed } = todo;
        console.log(`
        id: ${id},
        title: ${title},
        completed: ${completed}
    `);
    });
}
getData(1);
