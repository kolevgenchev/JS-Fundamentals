function negativeOrPositive(arr){
    let newArr=[]
    for(let i=0;i<arr.length;i++){
        if(Number(arr[i])<0){
            newArr.unshift(Number(arr[i]))
        }else{
            newArr.push(Number(arr[i]))
        }
    }
   console.log(newArr.join("\n"))
   

}negativeOrPositive(['3', '-2', '0', '-1'])