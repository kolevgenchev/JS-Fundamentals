function addAndSubtract (arr){
let newArr=[]
let firstNums=0
let secondNums=0
for(let i=0;i<arr.length;i++){
    let currentNum=arr[i]
    firstNums+=currentNum
    if(currentNum%2===0){
        currentNum+=i
    }else{
        currentNum-=i
    }
    secondNums+=currentNum
    newArr.push(currentNum)
}
console.log(newArr)
console.log(firstNums)
console.log(secondNums)
}
addAndSubtract([5, 15, 23, 56, 35])