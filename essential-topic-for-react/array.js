const numbers=[2,5,8,6];
for(let i=0;i<numbers.length;i++)
{
    console.log(numbers[i]);
}
function multiply(num1,num2){
    const result=num1+num2;
    return result;
}
const add=multiply(5,5);
console.log(add);

const student={
    name:'salib khan',
    age:32,
    movies:['king khan','dhakar mastan'],
}
const myVariable='age';
console.log(student.age);
console.log(student['age']);
console.log(student[myVariable]);