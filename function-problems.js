// write a function called "isEven" that takes an integer as input and returns true if the number is even,and false otherwise.
//write a function called "sumArray " that takes an array of numbers as input and returns the sum of all the numbers in the array.

function sumOfArray(number){
    let sum=0;
    for(let i=0;i<number.length;i++){
        sum+=number[i];
    }
    return sum;
}
const arr=[5,10,5];
const result=sumOfArray(arr);
console.log(result);