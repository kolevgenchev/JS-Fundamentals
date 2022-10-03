function dungenous (arr){
let newArr=arr.join("")
let operatingArr=newArr.split("|")
let health=100
let coins=0
let length=operatingArr.length
let room=0
for(let i=0;i<length;i++){
    room++
    let currentCombination=operatingArr[i]
    let splitted=currentCombination.split(" ")
    let comand=splitted[0]
    let score=Number(splitted[1])
    if(comand==="potion"){
        let cur=100-health
        if((score+health)>100){
            health=100
            console.log(`You healed for ${cur} hp.`)
            console.log(`Current health: ${health} hp.`)
        }else{
            health+=score
            console.log(`You healed for ${score} hp.`)
            console.log(`Current health: ${health} hp.`)
        }
    }else if (comand==="chest"){
        coins+=score
        console.log(`You found ${score} coins.`)
    }else{
        let monsterName=comand
        let attack=score
        health-=attack
        if(health>0){
            console.log(`You slayed ${monsterName}.`)
        }else{
            console.log(`You died! Killed by ${monsterName}.`)
            console.log(`Best room: ${room}`)
            return;
            
        }

    }
    if(i===length-1){
        console.log(`You've made it!`)
        console.log(`Coins: ${coins}`)
        console.log(`Health: ${health}`)
       
    }
}

}
dungenous(["rat 10|bat 20|potion 10|rat 10|chest 100|boss 70|chest 1000"])