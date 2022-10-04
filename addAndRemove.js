function addAndRemove (arr){
    let counter=0
    let finalArr=[]
for(let i=0;i<arr.length;i++){
    counter++
let current=arr[i]
if(current==="add"){
finalArr.push(counter)
}else if(current==="remove"){
    finalArr.pop()
}
}
if(finalArr.length===0){
    console.log("Empty")
}else{
    console.log(finalArr.join(" "))
}


}addAndRemove(['remove', 'add',"add", 'remove'])