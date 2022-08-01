function spiceMustFlow(startingYield){
let dayCount=0
let extracted=0
let finalExtract=0
while (startingYield>=100){
    dayCount++
    extracted=startingYield-26
    startingYield-=10
    
   finalExtract+=extracted
}
if(startingYield<100&&dayCount===0){

console.log(dayCount)
console.log(0)
}else{
console.log(dayCount)
console.log(finalExtract-26)
}
}
spiceMustFlow(99)