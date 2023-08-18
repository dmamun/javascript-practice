//write a function call "removeDuplicates" that takes an array of elements as inputand returns a new array with duplicate elements.


function removeDuplicate(arr){
    let newArray=[];
    for(let i=0;i<arr.length;i++){
        if(newArray.includes(arr[i])===false){
            newArray.push(arr[i]);
        }
    }
    return newArray;
}
let array=[1,2,2,3,4,8,8,9];
let result=removeDuplicate(array);
console.log(result);