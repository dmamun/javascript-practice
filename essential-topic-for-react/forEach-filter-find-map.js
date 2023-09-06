const products=[
    {name:'laptop',price:32000, brand:'lenevo',color:'silver'},
    {name:'mobile',price:22000, brand:'iphone',color:'red'},
    {name:'watch',price:3000, brand:'casio',color:'yellow'},
    {name:'money-bag',price:200, brand:'remond',color:'black'},
];
const brands=products.map(product=>product.brand);
console.log(brands);
products.forEach(product=>console.log(product.color));
const cheap=products.filter(product=>product.price<5000);
console.log(cheap);
const special=products.find(product=>product.price<5000);
console.log(special);