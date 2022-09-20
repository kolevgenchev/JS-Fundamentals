function computerStore (arr){
let typeOfcustomer=arr.pop([arr.length-1])
let totalPrice=0
let tax=0
for (let el of arr){
if(el<0){
    console.log("Invalid price!")
    continue;
}
totalPrice+=Number(el)
tax+=el*0.20
}
if(totalPrice===0){
    console.log("Invalid order!")
    return;
}
console.log("Congratulations you've just bought a new computer!")
console.log(`Price without taxes: ${totalPrice.toFixed(2)}$`)
console.log(`Taxes: ${tax.toFixed(2)}$`)
console.log("-----------")
if(typeOfcustomer==="special"){
    console.log(`Total price: ${((totalPrice+tax)*0.90).toFixed(2)}$`)
}else {
    console.log(`Total price: ${(totalPrice+tax).toFixed(2)}$`)
}

}
computerStore([
    '1023', 
    '15', 
    '-20',
    '-5.50',
    '450', 
    '20', 
    '17.66', 
    '19.30', 'regular'
    ])