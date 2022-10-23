function battle (arr){
let expNeeded=Number(arr[0])
let countOfBattles=Number(arr[1])
let FinalExpGained=0
let counter=0
for(let i=2;i<=countOfBattles+1;i++){
    counter++
let currentExp=Number(arr[i])
if(counter%3===0){
    currentExp*=1.15
}
if(counter%5===0){
    currentExp*=0.90
}
if(counter%15===0){
    currentExp*=1.05
}
FinalExpGained+=currentExp
if(FinalExpGained>=expNeeded){
    console.log(`Player successfully collected his needed experience for ${counter} battles.`)
    return;
}
}
console.log(`Player was not able to collect the needed experience, ${(expNeeded-FinalExpGained).toFixed(2)} more needed.`
)

}battle([500,
    5,
    50,
    100,
    200,
    100,
    30])