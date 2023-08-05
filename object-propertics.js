var shoppingCart={
    books:20,
    sunglass:1,
    mouse:5,
    pen:10,
}
console.log(shoppingCart);
// find keys value
var propertics=Object.keys(shoppingCart);
console.log(propertics);
// find values
var propertyValue=Object.values(shoppingCart);
console.log(propertyValue);
// set property values
shoppingCart.mouse=15;
console.log(shoppingCart)