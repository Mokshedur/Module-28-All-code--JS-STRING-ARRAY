const numbers = [3, 6, 4, 8, 9, 15, 21, 45, 87];
const numberSlice = numbers.slice(4, 8);
//console.log(numberSlice);
//console.log(numbers);
//splice aita element delete korar jonno 
//const numberSplice = numbers.splice(4, 2)
// console.log(numberSplice);
// console.log(numbers);
const numberSplice2 = numbers.splice(4, 3, 99, 111, 888, 777);
console.log(numberSplice2);
console.log(numbers);