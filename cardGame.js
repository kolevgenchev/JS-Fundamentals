function cardGame (arr){
let powers={
    2:2,
    3:3,
    4:4,
    5:5,
    6:6,
    7:7,
    8:8,
    9:9,
    10:10,
    J:11,
    Q:12,
    K:13,
    A:14
}
let types={
    S:4,
    H:3,
    D:2,
    C:1
}

let unique={}
for(el of arr){
    let [name,cards]=el.split(": ")
    cards=cards.split(", ")
    let uniqueCards=[...new Set(cards)]
    let currentScore=0
    if(!unique.hasOwnProperty(name)){
        unique[name]=[]
    }
    for(el of uniqueCards){
        if(!unique[name].includes(el)){
            unique[name].push(el)
        }
    }
    
   
}
let finalObj={}
let keys=(Object.keys(unique))
let values=Object.values(unique)
for(let i=0;i<keys.length;i++){
    let currentKey=keys[i]
    let currentValue=values[i]
    let currentScore=0
    for(el of currentValue){
        let elParts=el.split("")
        let type=elParts.pop()
        let power=elParts.join("")
        let score=powers[power]*types[type]
            currentScore+=score
}
finalObj[currentKey]=currentScore
}
for(el in finalObj){
    console.log(`${el}: ${finalObj[el]}`)
}
}cardGame([
    'Peter: 2C, 4H, 9H, AS, QS',
    'Tomas: 3H, 10S, JC, KD, 5S, 10S',
    'Andrea: QH, QC, QS, QD',
    'Tomas: 6H, 7S, KC, KD, 5S, 10C',
    'Andrea: QH, QC, JS, JD, JC',
    'Peter: JD, JD, JD, JD, JD, JD'
    ])