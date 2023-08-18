//write a function called "filterArray" that takes an array of numbers as input and returns a new array with only the even numbers from the original array.
function printEvenNumber(number){
    let evenNumber=[];
    for(let i=0;i<number.length;i++){
        if(number[i]%2===0){
            evenNumber.push(number[i]);
        }
    }
     return evenNumber;
}
let numberArray=[5,4,7,8,10]
let result=printEvenNumber(numberArray);
console.log(result);