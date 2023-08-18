const arr=[157,190,130];
const result=tallestPerson(arr);
console.log(result);



function tallestPerson(number){
    let max=number[0];
    for(let i=0;i<number.length;i++){
        if(number[i]>max){
            max=number[i];
        }
    }
    return max;
}