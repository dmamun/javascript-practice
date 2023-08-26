const products=[
    {id:1,name:"lenevo",price:60000},
    {id:2,name:"macbook",price:100000},
    {id:3,name:"windows",price:40000},

]
// const names=products.map(p=>p.name);
// console.log(names);
// const price=products.map(p=>p.price);
// console.log(price);
// const above50000=products.filter(p=>p.price>50000);
// console.log(above50000);
const below50000=products.find(p=>p.price<50000);
console.log(below50000);

const totalPrice=products.reduce((accumulator,currentValue)=>accumulator+currentValue.price,0);
console.log(totalPrice);