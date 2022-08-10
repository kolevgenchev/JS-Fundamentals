function sumEvenNum(arr) {
let sum=0
for(let i=0;i<=arr.length-1;i++){
let currentNum=Number(arr[i])
if(currentNum%2===0){
    sum+=currentNum
}
}
console.log(sum)

}
sumEvenNum(['1','2','3','4','5','6'])