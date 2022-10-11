function manowar(arr){
let pirateShipStatus=arr[0].split(">")
let warShipStatus=arr[1].split(">")
let maxHealth=Number(arr[2])
let twentyPercent=maxHealth*0.20
let index=3
let comand=arr[index]
let bool=true
while(comand!=="Retire"){
    let current=comand.split(" ")
    if(current[0]==="Fire"){
        let curIndex=Number(current[1])
        let curDamage=Number(current[2])
        if(warShipStatus[curIndex]!==undefined){
            warShipStatus[curIndex]-=curDamage
            if(warShipStatus[curIndex]<=0){
                console.log("You won! The enemy ship has sunken.")
                bool=false
                return;
            }
        }else {
            index++
            comand=arr[index]
            continue;
        }
    }else if(current[0]==="Defend"){
        let startIndex=Number(current[1])
        let endIndex=Number(current[2])
        let damage=Number(current[3])
        if(pirateShipStatus[startIndex]!==undefined&&pirateShipStatus[endIndex]!==undefined){
            for(let i=startIndex;i<=endIndex;i++){
                pirateShipStatus[i]-=damage
                if(pirateShipStatus[i]<=0){
                    console.log("You lost! The pirate ship has sunken.")
                    bool=false;
                    return;
                }
            }
        }else{
            index++
            comand=arr[index]
            continue;
        }
        
    }else if(current[0]==="Repair"){
        let indexx=Number(current[1])
        let health=Number(current[2])
        if(pirateShipStatus[indexx]!==undefined){
            if(pirateShipStatus[indexx]+health>=maxHealth){
                pirateShipStatus[indexx]=maxHealth
            }else if(pirateShipStatus[indexx]+health<maxHealth){
                pirateShipStatus[indexx]+=health
            }
        }else{
            index++
            comand=arr[index]
            continue;
        }
    }else if(current[0]==="Status"){
        let count=0
        for(let i=0;i<pirateShipStatus.length;i++){
            let section=Number(pirateShipStatus[i])
            if(section<twentyPercent){
                count++
            }
        }
        console.log(`${count} sections need repair.`)
    }
    index++
     comand=arr[index]
}
let sumWarship=0
let sumPirateShip=0
if(bool){
    for(let el of warShipStatus){
        sumWarship +=Number(el)
    }
    for(let el of pirateShipStatus){
        sumPirateShip +=Number(el)
    }
    console.log(`Pirate ship status: ${sumPirateShip}`)
    console.log(`Warship status: ${sumWarship}`)
}
}
manowar(["12>13>11>20>66",
"12>22>33>44>55>32>18",
"70",
"Fire 2 11",
"Fire 8 100",
"Defend 3 6 11",
"Defend 0 3 5",
"Repair 1 33",
"Status",
"Retire"])