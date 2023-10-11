

const add = (first: number, second: number): number => {
    return first + second
}
console.log(add(1, 10));


const logger = (message: string): void => {
    console.log(message)
}
logger('Hello');


const throwErroe = (message: string): never => {
        throw new Error(message);
}










