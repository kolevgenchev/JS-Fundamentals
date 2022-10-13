function smallest (arr){
let sortedArr=arr.sort((a,b)=>a-b)
let final=sortedArr.slice(0,2)
console.log(final.join(" "))

}smallest([30, 15, 50, 5])