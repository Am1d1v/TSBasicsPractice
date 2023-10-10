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



