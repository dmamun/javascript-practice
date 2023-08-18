function cubeNumber(number){
    if(typeof number !=='number'){
        return 'please enter a number';
    }
    let result=number**3;
    return result;
}
function matchFinder(string1,string2){
    if(typeof string1!=="string" || typeof string2!=="string"){
        return "please enter string";
    }
    if(string1.includes(string2)){
        return true;
    }
    else{
        return false;
    }
}
function sortMaker(arr) {
    let [item1,item2] = arr;
  
    if (item1 > 0 && item2 > 0) {
      return [Math.max(item1, item2),Math.min(item1,item2)];
    } else if (item1 === item2) {
      return "equal";
    } else if (item1 < 0 || item2 < 0) {
      return "invalid input";
    }
}
  function findAddress(obj){

    const street=obj.street ||"__";
    const house=obj.house ||"__";
    const society=obj.society ||"__";

    return street+","+house+","+society;
}
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
