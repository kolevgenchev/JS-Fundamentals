function print (arr){
let step=Number(arr.pop())
let str=""
for(let i=0;i<arr.length;i++){
if (i===0){
    str +=arr[i]+" "
}
if(i%step===0&&i!==0){
    str+=arr[i]+" "
}
}
console.log(str)
}
print(['5', '20', '31', '4', '20', '2'])