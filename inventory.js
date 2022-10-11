function inventory (arr){
let currentArr=arr[0].split(", ")
let comand=arr[1]
let index=1
while(comand!=="Craft!"){
    let currentCom=arr[index].split(" - ")
    if(currentCom[0]==="Collect"){
        if(!currentArr.includes(currentCom[1])){
            currentArr.push(currentCom[1])
        }else {
            index++
            comand=arr[index]
            continue;
        }
    }else if(currentCom[0]==="Drop"){
        if(currentArr.includes(currentCom[1])){
            currentArr.splice((currentArr.indexOf(currentCom[1])),1)
    }
    }else if(currentCom[0]==="Combine Items"){
        let newCom=currentCom[1].split(":")
        if(currentArr.includes(newCom[0])){
            let nowIndex=currentArr.indexOf(newCom[0])
            currentArr.splice(nowIndex+1,0,newCom[1])
        }else {
            index++
            comand=arr[index]
            continue;
        }
    }else if(currentCom[0]==="Renew"){
        if(currentArr.includes(currentCom[1])){
            let indexOFF=currentArr.indexOf(currentCom[1])
            let toReplace=currentArr.splice(indexOFF,1)
            currentArr.push(toReplace.join(" "))
        }
    }
index++
comand=arr[index]
}
console.log(currentArr.join(", "))
}
inventory([
    'Iron, Sword',
    'Drop - Bronze',
    'Combine Items - Sword:Bow',
    'Renew - Iron',
    'Craft!'
  ])
