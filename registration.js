function registration (arr){
let originalName=arr.shift()
let comand=arr.shift()
while(comand!=="Registration"){
    let args=comand.split(" ")
    if(args[0]==="Letters"){
        if(args[1]==="Lower"){
            originalName=originalName.toLowerCase()
            console.log(originalName)
        }else{
            originalName=originalName.toUpperCase()
            console.log(originalName)
        }
    }else if(args[0]==="Reverse"){
        if(Number(args[1])>=0&&Number(args[1])<originalName.length&&Number(args[2])>=0&&Number(args[2])<originalName.length){
        let neww=originalName.substring(Number(args[1]),Number(args[2])+1)
        let textArr=neww.split("").reverse().join("")
        console.log(textArr)
        }
        
    }else if(args[0]==="Substring"){
        if(originalName.includes(args[1])){
            originalName=originalName.replace(args[1],"")
            console.log(originalName)
        }else{
            console.log(`The username ${originalName} doesn't contain ${args[1]}.`)
        }
    }else if(args[0]==="Replace"){
        let search = args[1]
        let replaceWith = '-';
        originalName = originalName.split(search).join(replaceWith);
        console.log(originalName)
    }else if(args[0]==="IsValid"){
        if(originalName.includes(args[1])){
            console.log("Valid username.")
        }else{
            console.log(`${args[1]} must be contained in your username.`)
        }
    }



    comand=arr.shift()
}

}registration(["John",
"Letters Lower",
"Substring SA",
"IsValid @",
"Registration"])