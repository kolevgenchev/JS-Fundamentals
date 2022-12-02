function furniture (arr){
    let str=""
    let comand=arr.shift()
while(comand!=='Purchase'){
let current=comand
str+=current

    comand=arr.shift()
}
// let pattern=/>>\w+<<[\d\.]+!\d+/gm
let pattern=/>>(?<futniture>\w+)<<(?<price>[\d\.]+)!(?<quantity>\d+)/gm
let result=str.matchAll(pattern)
let money=0
console.log("Bought furniture:")
for(el of result){
    
    console.log(el[1])
    money+=Number(el[2])*Number(el[3])
}
console.log(`Total money spend: ${money.toFixed(2)}`)
}furniture(['>>Sofa<<312.23!3',
'>>TV<<300!5',
'>Invalid<<!5',
'Purchase']
)