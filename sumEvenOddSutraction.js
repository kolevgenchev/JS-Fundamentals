function evenOddSub (arr){
    let sumEven=0
    let sumOdd=0
for(let i=0;i<arr.length;i++){
let currentNum=arr[i]
if(currentNum%2===0){
    sumEven+=currentNum
}else {
    sumOdd+=currentNum
}
}
console.log(sumEven-sumOdd)

}
evenOddSub([2,4,6,8,10])