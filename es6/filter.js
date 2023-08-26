const players=[42,30,25,35,18,23];
const ageAbove25=players.filter(player=>player>25);
console.log(ageAbove25);

const evenNumber=players.filter(even=>even%2===0);
console.log(evenNumber);

const friends=["tom","peter","michel","ankita"];
const length=friends.filter(friend=>friend.length>4);
console.log(length);
