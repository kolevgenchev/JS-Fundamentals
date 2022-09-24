function muOnline (str){
let arr=str.split("|")
let health=100
let btc=0
let rooms=0
for(let i=0;i<arr.length;i++){
    rooms++
    let currentLine=arr[i]
    let newCurrentLine=currentLine.split(" ")
    let command=newCurrentLine[0]
    let number=Number(newCurrentLine[1])
    if(command==="potion"){
        if(health+number>=100){
            
            console.log(`You healed for ${100-health} hp.`)
            health=100
            console.log(`Current health: ${health} hp.`)
            
            continue;
        }else {
            health=health+number
            console.log(`You healed for ${number} hp.`)
            console.log(`Current health: ${health} hp.`)
            continue;
        }
        
    }else if (command==="chest"){
        console.log(`You found ${number} bitcoins`)
        btc+=number
        continue;
    }else{
        health-=number
        if(health>0){
            console.log(`You slayed ${command}.`)
            continue;
        }else if (health<=0){
            console.log(`You died! Killed by ${command}.`)
            console.log(`Best room: ${rooms}`)
            return;
        }
    }

}
console.log(`You've made it!`)
console.log(`Bitcoins: ${btc}"`)
console.log(`Health: ${health}`)
}
muOnline("cat 10|potion 30|orc 10|chest 10|snake 25|chest 110")