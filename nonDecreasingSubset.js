function nonDec (arr){
    let newArr=[]
    let biggest=0;
  for(let i=0;i<arr.length;i++){
    let current =arr[i]
    if(i===0){
        newArr.push(current)
        biggest=current
        continue;
    }
    if(current>=biggest){
        newArr.push(current)
        biggest=current
    }

  }
console.log(newArr.join(" "))
    
}
nonDec([ 1, 3, 8, 4, 10, 12, 3, 2, 24])