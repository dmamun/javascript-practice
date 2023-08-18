//write a function call "sumOfAllEvenNumber" that takes an array of numbers as input and returns the sum of all even number.

function sumOfAllEvenNumber(number){
    
    let newArray=[];
    for(let i=0;i<number.length;i++){
        if(number[i]%2===0){
            newArray.push(number[i]);
        }

    }

    return newArray;
}
let array=[1,5,6,8,3,9];
let result=sumOfAllEvenNumber(array);
console.log(result);