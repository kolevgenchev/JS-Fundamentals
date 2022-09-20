function shootWin (arr){
let sequance=arr.shift().split(" ")
let index=0
let command=arr[index]
let counter=0
while(command!=="End"){
    let currentIndexShot=Number(command)
    let currentNumber=Number(sequance[currentIndexShot])
    if(currentIndexShot<0||currentIndexShot>sequance.length-1){
        index++
        command=arr[index]
        continue;
    }
    for(let i =0;i<sequance.length;i++){
        let current=Number(sequance[i])
        if(current>currentNumber&&current!=-1){
            sequance[i]=current-currentNumber
        }else if (current<=currentNumber&&current!=-1){
            sequance[i]=current+currentNumber
        }
            
    
    }

    sequance.splice(currentIndexShot,1,-1)
    
     index++
    command=arr[index]
    counter++
}
console.log(`Shot targets ${counter} -> ${sequance.join(" ")}`)
}
shootWin(["24 50 36 70",
"0",
"4",
"3",
"1",
"End"])