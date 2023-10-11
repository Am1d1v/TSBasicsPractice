"use strict";
const colors = [];
const dates = [new Date(), new Date()];
const fruits = [
    ['banana'],
    ['lemon']
];
const nums = [1, 2, 3, 4, 5, 6];
const num = nums[0];
const newNums = nums.map((item) => {
    return item * 10;
});
console.log(newNums);
const importantDates = [new Date(), '2023-10-11'];
importantDates.push(new Date());
console.log(importantDates);
