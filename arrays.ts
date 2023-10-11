


const colors: string[] = [];

const dates = [new Date(), new Date()];

const fruits = [
    ['banana'],
    ['lemon']
];


const nums = [1, 2, 3, 4, 5, 6];

const num = nums[0];

const newNums = nums.map((item: number) => {
    return item * 10;
})
console.log(newNums);


const importantDates: (string | Date)[] = [new Date(), '2023-10-11'];
importantDates.push(new Date());
console.log(importantDates);











