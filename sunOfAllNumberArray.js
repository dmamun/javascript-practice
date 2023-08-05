function sumOfAllNumber(number){
    let sum=0;
    for(var i=0;i<number.length;i++){
        sum+=number[i];
        console.log(number[i])
    }
    return sum;
}
const array=[20,10,30,40];
const result=sumOfAllNumber(array);
console.log(result);