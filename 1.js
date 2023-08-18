function cubeNumber(number){
    if(typeof number !=='number'){
        return 'please enter a number';
    }
    let result=number**3;
    return result;
}
let result=cubeNumber(4);
console.log(result);