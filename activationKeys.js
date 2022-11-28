function activationKeys(str){
let rawKey=str.shift()
let comand=str.shift()
while(comand!=="Generate"){
let current=comand.split(">>>")
if(current[0]==="Slice"){
    rawKey=rawKey.substr(0,current[1])+rawKey.substr(current[2])
    console.log(rawKey)
}else if(current[0]==="Flip"){
    if(current[1]==="Upper"){
        let cuttedPart=rawKey.substring(Number(current[2]),Number(current[3]))
        cuttedPart=cuttedPart.toUpperCase()
        rawKey=rawKey.substring(0,Number(current[2]))+cuttedPart+rawKey.substring(Number(current[3]))
        console.log(rawKey)
    }else if(current[1]==="Lower"){
        let cuttedPart=rawKey.substring(Number(current[2]),Number(current[3]))
        cuttedPart=cuttedPart.toLowerCase()
        rawKey=rawKey.substring(0,Number(current[2]))+cuttedPart+rawKey.substring(Number(current[3]))
        console.log(rawKey)
    }
}else if (current[0]==="Contains"){
    if(rawKey.includes(current[1])){
        console.log(`${rawKey} contains ${current[1]}`)
    }else{
        console.log("Substring not found!")
    }
}

comand=str.shift()

}

console.log(`Your activation key is: ${rawKey}`)




}activationKeys(["134softsf5ftuni2020rockz42",

"Slice>>>3>>>7",

"Contains>>>-rock",

"Contains>>>-uni-",

"Contains>>>-rocks",

"Flip>>>Upper>>>2>>>8",

"Flip>>>Lower>>>5>>>11",

"Generate"])