function someDigits (num){
    let numInString=String(num)
    let result=0
    // for(let i=0;i<numInString.length;i++){
        
    //     let currentNum=Number(numInString[i])
    //     result+=currentNum
    // }
    // console.log(result)
    // let a=5
    // let b=6
    // let res=a+b===12 ? "yes":"no";
    // console.log(res)
    // console.log(typeof res)
    for(let no of numInString){
        result+=Number(no)
    }
    console.log(result)
}
someDigits(245678)