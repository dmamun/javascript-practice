function canPay(changeArray,totalDue){
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

let array=[1,2,3];
let charge=20;

let result=canPay(array,charge);
console.log(result);
