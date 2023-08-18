function sumOfAllOddNumber(number){
    let sum=0;
    for(let element of number){
        if(element%2===1){
            sum+=element;
        }
    }
    return sum;
}
let array=[1,5,6,3];
let result=sumOfAllOddNumber(array);
console.log(result);