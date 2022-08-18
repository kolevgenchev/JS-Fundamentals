function equalArrs (arr1,arr2){
let sumArr=0
let counter=0
let identical=true
for(let i=0;i<arr1.length;i++){
    let firstArrCurrentNum=Number(arr1[i])
    sumArr+=firstArrCurrentNum
    let secondArrCurrentNum=Number(arr2[i])
    if(firstArrCurrentNum!==secondArrCurrentNum){
        console.log(`Arrays are not identical. Found difference at ${counter} index`)
        identical=false
        break;
    }
    counter++
}
if(identical){
    console.log(`Arrays are identical. Sum: ${sumArr}`)
}

}
equalArrs(['1'], ['10'])