function sortMaker(arr){
    
    if(arr[0]>0 && arr[1]>0){
        return [arr[1],arr[0]];
    }
    else if(arr[0]===arr[1]){
        return "both are equal";
    }
    else if(arr[0]<0 || arr[1]<0){
        return "invalid input";
    }
    else{
        return "nothing";
    }

}
let newArray=[1,2]
let result=sortMaker(newArray);
console.log(result);