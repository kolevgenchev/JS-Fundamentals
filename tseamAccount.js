function tseam (arr){
let acc=arr[0]
let startingAcc=acc.split(" ")
let index=1
let comand=arr[index]
while(comand!=="Play!"){
let comandInArr=comand.split(" ")
let curentAction=comandInArr[0]
let curentGame=comandInArr[1]
if(curentAction==="Install"){
    if(startingAcc.indexOf(curentGame)===-1){
        startingAcc.push(curentGame)
    }
}else if(curentAction==="Uninstall"){
    if(startingAcc.indexOf(curentGame)!==-1){
        let indexOfcurrentGame=startingAcc.indexOf(curentGame)
        startingAcc.splice(indexOfcurrentGame,1)
    }
}else if (curentAction==="Update"){
    if(startingAcc.indexOf(curentGame)!==-1){
        let indexOfcurrentGame=startingAcc.indexOf(curentGame)
        let cuttedPart=startingAcc.splice(indexOfcurrentGame,1).join(" ")
        startingAcc.push(cuttedPart)
    }
}else if(curentAction==="Expansion"){
    let newArr=curentGame.split("-")
    let game=newArr[0]
    let expansion=newArr[1]
    if(startingAcc.indexOf(game)!==-1){
        let strForPushing=`${game}:${expansion}`
        let indexOfcurrentGame=startingAcc.indexOf(game)
        startingAcc.splice(indexOfcurrentGame+1,0,strForPushing)
    }
}
index++
comand=arr[index]

}
console.log(startingAcc.join(" "))

}tseam(['CS WoW Diablo',
'Install LoL',
'Uninstall WoW',
'Update Diablo',
'Expansion CS-Go',
'Play!'])