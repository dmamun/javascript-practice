function maxInArray(number){
    let largest=number[0];
    for(let i=0;i<number.length;i++){
        if(number[i]>largest){
            largest=number[i]
        }
    }
    return largest;
}
let array=[5,6,7,8];
let result=maxInArray(array);
console.log(result);