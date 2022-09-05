function lastK (n,k){
    let arr=[1]
    for(let i=1;i<n;i++){
        let currentNum=arr.slice(-k)
        let sum=0
        for (el of currentNum){
            sum+=Number(el)
        }
        arr.push(sum)
    }
    console.log(arr.join(" "))
}lastK(6,3)