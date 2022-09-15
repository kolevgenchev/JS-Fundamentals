function reverseString(str){
let string=str.toString()
let finalStr=""
for(let i=string.length-1;i>=0;i--){
let current=string[i]
finalStr+=current
}
console.log(finalStr)
}reverseString("Hello")