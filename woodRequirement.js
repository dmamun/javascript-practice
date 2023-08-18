function woodCalculator(chair,table,bed){
    let perChairWood=3;
    let perTableWood=10;
    let perBedWood=50;

    let totalChair=chair*perChairWood;
    let totalTable=table*perTableWood;
    let totalBed=bed*perBedWood;
    let result=totalChair+totalTable+totalBed;
    return result;

}
let result=woodCalculator(4,5,7);
console.log(result);