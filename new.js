function findAddress(obj){

    const street=obj.street ||"__";
    const house=obj.house ||"__";
    const society=obj.society ||"__";

    return street+","+house+","+society;
}
let inputObj={
    street:10,
    house:"15A",
    // society:"Earth Perfect"
};
const result=findAddress(inputObj);
console.log(result);
