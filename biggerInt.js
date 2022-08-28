function biggerInt(arr){
let newArr=[]

for(let i=0;i<arr.length;i++){
    let isBigger=true
    let current=arr[i]
    for(let k=i+1;k<arr.length;k++){
        let second=arr[k]
        if(current<=second){
            isBigger=false
            break;
            
        }
}
    if(isBigger===true){
        newArr.push(current)
    }

}
console.log(newArr)
}
biggerInt([41,41,34,20])