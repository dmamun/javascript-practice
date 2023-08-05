function isLeapYear(number){
    if(number%4==0){
        return true;
    }
    else{
        return false;
    }
}
const takenNumber=2021;
const result=isLeapYear(takenNumber);
console.log(result);