//if right side is an onjecr left side of destructurning will be object as well.

const person={
    name:"mamun",
    age:20,
    color:"gray"
}

const{name,age,color}=person;
console.log(name);
console.log(age);

//array destructuring
const numbers=[45,53];
const[first,second]=numbers;
console.log(first,second);

//skipping items in an array
let numbers2=[1,5,6,7,8];
const [num1,,num3,num4,num5]=numbers2;
console.log(num1,num3,num4,num5);
