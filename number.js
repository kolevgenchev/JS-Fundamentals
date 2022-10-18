function numbers(numbers){
    
let numsInArr=numbers.split(" ").map(a=>Number(a)).sort((a,b)=>a-b)
if(numsInArr.length<2){
    console.log("No")
    return;
}
let sum=0
for(let el of numsInArr){
    sum+=el
}
let average=sum/numsInArr.length

let newArr=numsInArr.filter(a=>a>average).reverse()
if(newArr.length===0){
    console.log("No")
    return;
}
if(newArr.length>5){
    let final=[]
    for(let i=0;i<5;i++){
        final.push(newArr[i])
    }
    console.log(final.join(" "))
    
}else{
    console.log(newArr.slice().join(" "))
    
}

}
numbers('1 1 1')