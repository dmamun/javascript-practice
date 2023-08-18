function canPay(changeArray,totalDue){
    
    if(!changeArray[0]){
        return "empty array";
    }
    let sum=0;
    for(let i=0;i<changeArray.length;i++){
        sum+=changeArray[i];
      
       
    }
    if(sum>totalDue){
        return true;
    }
    else{
        return false;
    }
}

let array=[1,2,5];
let charge=10;

let result=canPay(array,charge);
console.log(result);
