function memoryGame (arr){
let arrCopy=arr.slice(0)
let startingSequenceState=arrCopy[0].split(" ")
let index=1
let command=arr[index]
let numberOfMoves=0
while(command!=="end"){
    let firstIndex=(command[0])
    let secondIndex=(command[2])
    numberOfMoves++
    if(firstIndex==="-"||firstIndex>startingSequenceState.length-1||secondIndex==="-"||secondIndex>startingSequenceState.length-1||firstIndex===secondIndex){
        let middleIndex=Math.ceil((startingSequenceState.length-1)/2)
        startingSequenceState.splice(middleIndex,0,`-${numberOfMoves}a`,`-${numberOfMoves}a`)
        console.log("Invalid input! Adding additional elements to the board")
        index++
    command=arr[index]
    continue;
    }
    
    if(startingSequenceState[firstIndex]!==startingSequenceState[secondIndex]){
        console.log("Try again!")
    }
    if(startingSequenceState[firstIndex]===startingSequenceState[secondIndex]){
        let currentPair=startingSequenceState[firstIndex]
        console.log(`Congrats! You have found matching elements - ${startingSequenceState[firstIndex]}!`)
        startingSequenceState.splice(firstIndex,1)
        let secondElindex=startingSequenceState.indexOf(currentPair)
        startingSequenceState.splice(secondElindex,1)
        
    }
    if(startingSequenceState.length===0){
        console.log(`You have won in ${numberOfMoves} turns!`)
        return;
    }
    index++
    command=arr[index]
}
if(startingSequenceState.length!==0){
    console.log(`Sorry you lose :(\n${startingSequenceState.join(" ")}`)
}
}
memoryGame([
    "1 1 2 2 3 3 4 4 5 5", 
    "1 0",
    "-1 0",
    "1 0", 
    "1 0", 
    "1 0", 
    "end"
    ])