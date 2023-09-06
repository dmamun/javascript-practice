//array destructuring
const numbers=[40,50];
const [a,b]=numbers;
console.log(a,b);
//object destructuring

const employee={
    ide:'vs code',
    designation:'developer',
    machine:'mac',
    languages:['html','css','js'],
    specification:{
        height:66,
        weight:67,
        address:'kumarkhali',
        drink:'water'
    }
}
const {ide,machine}=employee;
console.log(ide,machine)
const {address}=employee.specification;
console.log(address)
