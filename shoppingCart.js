let shoppingCart=[
    
    {name:"shoe",price:1200,qantity:1},
    {name:"shirt",price:2400,qantity:4},
    {name:"pant",price:3000,qantity:5},
    {name:"belt",price:200,qantity:3},
];
let result=totalPrice(shoppingCart);
console.log(result);

function totalPrice(product){
    let sum=0;
    for(let i=0;i<product.length;i++){
        sum=sum+product[i].price*product[i].qantity;

    }
    return sum;
}