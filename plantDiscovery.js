function plantDiscovery(arr){
let numberOfPlants=Number(arr.shift())
let plants={}
for(let i=0;i<numberOfPlants;i++){
    let current=arr.shift()
    let [plant,rarity]=current.split("<->")
    plants[plant]={
        rarity : rarity,
        rating : []
    };

}
let comand=arr.shift()
while(comand!=="Exhibition"){
    let [com,args]=comand.split(": ")
    if(com==="Rate"){
    let [name,rating]=args.split(" - ")
    if(!plants.hasOwnProperty(name)){
        console.log("error")
        comand=arr.shift()
        continue;
    }
    plants[name].rating.push(rating)
    }else if (com==="Update"){
        let [name,newRarity]=args.split(" - ")
        if(!plants.hasOwnProperty(name)){
            console.log("error")
            comand=arr.shift()
            continue;
        }
        plants[name].rarity=newRarity
    }else if(com ==="Reset"){
        if(!plants.hasOwnProperty(args)){
            console.log("error")
            comand=arr.shift()
            continue;
        }
        plants[args].rating=[]
    }
    
    comand=arr.shift()
}

console.log("Plants for the exhibition:")
for(curPlant in plants){
    let sum=0
    let length=plants[curPlant].rating.length
    
    for(rate of plants[curPlant].rating){
        sum+=Number(rate)
    }
    let average;
    if(isNaN(sum/length)){
        average=0
    }else{
        average=(sum/length)
    }
console.log(`- ${curPlant}; Rarity: ${plants[curPlant].rarity}; Rating: ${average.toFixed(2)}`)
}

}plantDiscovery(["3",

"Arnoldii<->4",

"Woodii<->7",

"Welwitschia<->2",

"Rate: Woodii - 10",

"Rate: Welwitschia - 7",

"Rate: Arnoldii - 3",

"Rate: Woodii - 5",

"Update: Woodii - 5",

"Reset: Arnoldii",

"Exhibition"])