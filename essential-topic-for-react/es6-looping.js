const numbers=[4,5,7,8,6];
//for(let i=0;i<numbers.length;i++)
for(const number of numbers){
    console.log(number);
}
const nobab='siraj ud ullh';
for(const char of nobab){
    console.log(char);
}

//for..of method used in array,string
//for..in method used in object

const glass={
    name:'glass',
    color:'golden',
    price:12,
    isCleaned:true
}
for(const g in glass){
    console.log(g,":",glass[g]);
}
const manus={
    firstName:"john",
    lastName:"doe",
    age:30
}
for(const key in manus){
    console.log(key,":",manus[key]);
}