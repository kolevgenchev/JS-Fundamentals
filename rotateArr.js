function rotateArr (arr){
let rotations=Number(arr.pop())
for(let i=0;i<rotations;i++){
    let el=arr.pop()
    arr.unshift(el)
}
console.log(arr.join(" "))
}
rotateArr(['Banana', 'Orange', 'Coconut', 'Apple', '15'])