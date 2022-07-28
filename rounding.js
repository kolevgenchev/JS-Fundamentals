function rounding(num,pricision){
    if(pricision>15){
        pricision=15
    }
let finalNum=num.toFixed(pricision)
console.log(parseFloat(finalNum))
}
rounding(10.5,3)