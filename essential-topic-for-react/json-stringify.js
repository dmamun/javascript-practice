const student={
    name:'salib khan',
    age:35,
    movies:['king khan','dhakar mastan'],
}
const studentJSON=JSON.stringify(student);
console.log(studentJSON);
const studentObj=JSON.parse(studentJSON);
console.log(studentObj)