function sumOfNumber(number){
    let sum=0;
    for(let element of number){
        sum+=element;
    }
    return sum;
}
let array=[1,5,6];
let result=sumOfNumber(array);
console.log(result);