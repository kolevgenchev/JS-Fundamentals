function nmnMatrix(num){
    let arr=[]

    for(let i=0;i<num;i++){
        let newArr=[]
        for (let k=0;k<num;k++){
            newArr.push(num)
        }
        arr.push(newArr.join(" "))
    }
    console.log(arr.join("\n"))
}
nmnMatrix(3)