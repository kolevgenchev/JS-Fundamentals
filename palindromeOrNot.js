function palindrome (arr){
    
for(num of arr){
    let opositeNumAsStr=""
    let currentNumAaSaStr=String(num)
    for(let i=currentNumAaSaStr.length-1;i>=0;i--){
        opositeNumAsStr+=currentNumAaSaStr[i]
    }
    if(currentNumAaSaStr===opositeNumAsStr){
        console.log(true)
    }else {
        console.log(false)
    }
        
    
}




}
palindrome([32,2,232,1010])