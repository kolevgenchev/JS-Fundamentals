function heroesOfCode(arr){
let n=Number(arr.shift())
let heroes=[]
let heroe={}
for(let i=0;i<n;i++){
    let line=arr.shift().split(" ")
    let heroName=line[0]
    let hitPoints=Number(line[1])
    let manaPoints=Number(line[2])
    heroe={heroName,hitPoints,manaPoints}
    heroes.push(heroe)
}
let comand=arr.shift()
while(comand!=="End"){
    let curLine=comand.split(" - ")
    if(curLine[0]==="Heal"){
        let heroName=curLine[1]
        let hp=Number(curLine[2])
        let result=heroes.find(x=>x.heroName===heroName)
        let index=heroes.indexOf(result)
        if(heroes[index].hitPoints+hp>=100){
            console.log(`${heroName} healed for ${100-heroes[index].hitPoints} HP!`)
            heroes[index].hitPoints=100
        }else {
            heroes[index].hitPoints+=hp
            console.log(`${heroName} healed for ${hp} HP!`)
            
        }
        
    }else if(curLine[0]==="Recharge"){
        let heroName=curLine[1]
        let mana=Number(curLine[2])
        let result=heroes.find(x=>x.heroName===heroName)
        let index=heroes.indexOf(result)
        if(heroes[index].manaPoints + mana>=200){
            console.log(`${heroName} recharged for ${200-heroes[index].manaPoints} MP!`)
            heroes[index].manaPoints=200
        }else{
            heroes[index].manaPoints+=mana
            console.log(`${heroName} recharged for ${mana} MP!`)
        }
    }else if(curLine[0]==="CastSpell"){
        let heroName=curLine[1]
        let spellPoints=Number(curLine[2])
        let spellName=curLine[3]
        let result=heroes.find(x=>x.heroName===heroName)
        let index=heroes.indexOf(result)
        if(heroes[index].manaPoints>=spellPoints){
            heroes[index].manaPoints-=spellPoints
            console.log(`${heroName} has successfully cast ${spellName} and now has ${heroes[index].manaPoints} MP!`)
        }else {
            console.log(`${heroName} does not have enough MP to cast ${spellName}!`)
        }
    }else if(curLine[0]==="TakeDamage"){
        let heroName=curLine[1]
        let hpDamage=Number(curLine[2])
        let attackerName=curLine[3]
        let result=heroes.find(x=>x.heroName===heroName)
        let index=heroes.indexOf(result)
        heroes[index].hitPoints-=hpDamage
        if(heroes[index].hitPoints>0){
            console.log(`${heroName} was hit for ${hpDamage} HP by ${attackerName} and now has ${heroes[index].hitPoints} HP left!`)
        }else{
            heroes.splice(index,1)
            console.log(`${heroName} has been killed by ${attackerName}!`)
        }
    }


    comand=arr.shift()
}

heroes.forEach(x=>console.log(`${x.heroName}\n  HP: ${x.hitPoints}\n  MP: ${x.manaPoints}`))

}heroesOfCode(["2",
    "Solmyr 85 120",
    "Kyrre 99 50",
    "Heal - Solmyr - 10",
    "Recharge - Solmyr - 50",
    "TakeDamage - Kyrre - 66 - Orc",
    "CastSpell - Kyrre - 15 - ViewEarth",
    "End"])