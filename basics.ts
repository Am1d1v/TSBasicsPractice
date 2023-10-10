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
    const todo: ToDo = response.data;
    const {id, title, completed} = todo;

    console.log(`
        id: ${id},
        title: ${title},
        completed: ${completed}
    `)
})
}

getData(1);






