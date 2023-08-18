function biggestFriendName(name){
    let largest=name[0];
    for(let i=1;i<name.length;i++){
        if(name[i].length>largest.length){
            largest=name[i];
        }

    }
    return largest;

}
let array=["mehedy","akib","sakib","humayun-rashid"];
let result=biggestFriendName(array);
console.log(result);