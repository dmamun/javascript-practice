


function cheapeastPhone(phone){
    let cheapPhone=phone[0];
    for(let i=0;i<phone.length;i++){
        if(phone[i].price<cheapPhone.price){
            cheapPhone=phone[i];
        }
    }
    return cheapPhone;
}

let phones=[
    {phone:"samsung", price:40000},
    {phone:"walton" ,price:2000},
    {phone:"iphone" ,price:80000},
    {phone:"lenevo" ,price:4000},

]
let result=cheapeastPhone(phones);
console.log(result);