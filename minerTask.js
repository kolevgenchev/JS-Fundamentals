function miner(arr){
let obj={}
for(let i=0;i<arr.length;i+=2){
let item=arr[i]
let value=Number(arr[i+1])
if(!obj.hasOwnProperty(item)){
    obj[item]=0
}
obj[item]+=value
}
for(el in obj){
    console.log(`${el} -> ${obj[el]}`)
}
}miner([
    'Gold',
    '155',
    'Silver',
    '10',
    'Copper',
    '17'
    ])