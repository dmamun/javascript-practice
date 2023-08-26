const add=(a,b)=>(a+b)
const sum=add(2,5);
console.log(sum);

const multiply=(num1,num2)=>num1*num2;
const result=multiply(4,5);
console.log(result);

//large arrow function
const doMath=(a,b,c,d)=>{
    const add=a+b+c+d;
    const  multiply=a*b*c*d;
    const result=add+multiply;
    return result;

}
const resultValue=doMath(2,3,4,5);
console.log(resultValue);