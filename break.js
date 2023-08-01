var numbers=[45,50,60,45,60,70];
for(var i=0;i<numbers.length;i++){
    var number=numbers[i];
    if(number>60){
        break;
    }
    console.log(number);
}

var items=["bottle","pen","pencil","khata"];
for(var i=0;i<items.length;i++){
    var item=items[i];
    if(item=="pencil"){
        continue;
    }
    console.log(item);
}
