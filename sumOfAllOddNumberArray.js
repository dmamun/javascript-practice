function sumOfAllOddNumberArray(number){
    let sum=0;
    for(var i=0;i<number.length;i++){
        if(number[i]===0){
            sum+=number[i];
        }
        return sum;
    }
   
}
const array=[7,8,10,5,3];
const result=sumOfAllOddNumberArray(array);
console.log(result);