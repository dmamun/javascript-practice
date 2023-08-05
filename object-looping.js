var shoppingCart={
    books:20,
    sunglass:1,
    mouse:5,
    pen:10,
}
for(var propertyName in shoppingCart){
    console.log(propertyName);
}
for(var propertyName in shoppingCart){
    var value=shoppingCart[propertyName];
    console.log(propertyName,value);
}
