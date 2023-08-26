const glass={
    name:'glass',
    color:'golden',
    price:12,
    isCleaned:true
}
// const result=Object.keys(glass);
// console.log(result);
// const result2=Object.values(glass);
// console.log(result2);
// const result3=Object.entries(glass);
// console.log(result3);


// //delete glass
// delete glass.isCleaned;
// console.log(glass)

//freeze glass
Object.freeze(glass);
glass.source='bangladesh';
console.log(glass);


