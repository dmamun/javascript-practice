const numbers=[4,5,7,1,2,66];
const total=numbers.reduce((accumulator,currentValue)=>accumulator+currentValue,0);
console.log(total);