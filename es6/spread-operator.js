const numbers=[1,2,4,5,6];
// console.log(...numbers);
const arrayMax=Math.max(...numbers);
console.log(arrayMax);
//advanced

const sonka=[...numbers,999];
console.log(sonka);

const array1=[2,4,5,8];
const array2=[4,8,2,0,9];
const concatenatedArray=[...array1,...array2];
console.log(concatenatedArray);