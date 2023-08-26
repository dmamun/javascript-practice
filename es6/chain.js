const data=[{
    id:1,
    name:"mamun",
    address:"kochu khet",
}]
console.log(data[0].address);

const products={
    count:5000,
    data:[
        {id:1,name:"lenevo",price:50000},
        {id:1,name:"macbook",price:70000},
    ]
}
console.log(products.data[1].name);

const user={
    id:5001,
    name:'shoriful raj',
    street:{
        first:"54/1 uttor side",
        second:"poribag er goli",
        third:"nodori"
    },
    city:"dhaka"
}
console.log(user.street.second);

//optional chainning

const user2={
    id:5002,
    name:'pori biber majar',
    address:{
        city:"chittAGONG",
        country:"bangladesh"
    }
}
console.log(user2.address.street);