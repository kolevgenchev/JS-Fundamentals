function firstAndLast(arr){
let k=arr.shift()
let first=(arr.slice(0,k)).join(" ")
let second=arr.slice(-k).join(" ")
console.log(first+"\n"+second)



}
firstAndLast([2, 
    7, 8, 9])