function rightPlace(unfinishedWord,missingLetter,fullWord){
    // let res=unfinishedWord.replace("_",missingLetter)
    // if(res===fullWord){
    //     console.log("Matched")
    // }else {
    //     console.log("Not")
    // }
    let result=""
    for(let i=0;i<=unfinishedWord.length-1;i++){
        let currentChar=unfinishedWord[i]
        if(currentChar==="_"){
            result+=""+missingLetter
        }else {
            result+=currentChar
        }
    }
    if(result===fullWord){
        console.log("Matched")
    }else{
        console.log("Not Matched")
    }
}
rightPlace('Str_ng', 'o', 'Strong')