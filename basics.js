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
        logTODo(id, title, completed);
    });
    const logTODo = (id, title, completed) => {
        console.log(`
        id: ${id},
        title: ${title},
        completed: ${completed}
    `);
    };
}
getData(1);
getData(10);
