function friend(arr){
let curList=arr.shift().split(", ")
let comand=arr.shift()
let blackListCount=0
let lostCount=0
while(comand!=="Report"){
    comand=comand.split(" ")
    if(comand[0]==="Blacklist"){
        if(curList.includes(comand[1])){
            let index=curList.indexOf(comand[1])
            curList[index]="Blacklisted"
            blackListCount++
            console.log(`${comand[1]} was blacklisted.`)
        }else{
            console.log(`${comand[1]} was not found.`)
        }
    }else if(comand[0]==="Error"){
        let name=curList[Number(comand[1])]
        if(curList[Number(comand[1])]!==undefined&&curList[Number(comand[1])]!=="Blacklisted"&&curList[Number(comand[1])]!=="Lost"){
            curList[Number(comand[1])]="Lost"
            lostCount++
            console.log(`${name} was lost due to an error.`)
        }
    }else if(comand[0]==="Change"){
        
        if(curList[Number(comand[1])]!==undefined){
            let nameAtFirst=curList[Number(comand[1])]
            curList[Number(comand[1])]=comand[2]
            console.log(`${nameAtFirst} changed his username to ${comand[2]}.`)
        }
    }
    comand=arr.shift()
}
console.log(`Blacklisted names: ${blackListCount++}`)
console.log(`Lost names: ${lostCount}`)
console.log(curList.join(" "))
}friend(["Mike, John, Eddie, William",
"Error 3",
"Error 3",
"Change 0 Mike123",
"Report"])