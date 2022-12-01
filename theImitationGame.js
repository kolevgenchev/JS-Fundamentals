function imitationGame (str){
let message=str.shift()
let comand=str.shift()
while(comand!=='Decode'){
    let current=comand.split("|")
    if(current[0]==="ChangeAll"){
        while(message.includes(current[1])){
            message=message.replace(current[1],current[2])
        }
        
        
    }else if(current[0]==="Move"){
        let newMessage=message.slice(0,Number(current[1]))
        let newPlusOld=message+newMessage
        message=newPlusOld.slice(Number(current[1]))
    }else if(current[0]==="Insert"){
        message=message.slice(0,Number(current[1]))+current[2]+message.slice(Number(current[1]))
    }
    comand=str.shift()
}
console.log(`The decrypted message is: ${message}`)
}

imitationGame([
    'zzHe',
    'ChangeAll|z|l',
    'Insert|2|o',
    'Move|3',
    'Decode',
  ])