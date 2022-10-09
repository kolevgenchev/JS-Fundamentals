function palindrome (arr){
for (let i=0;i<arr.length;i++){
    let current=String(arr[i])
    let current2=current.split("")
    let reversed=current2.reverse().join("")
    if(reversed===current){
        console.log(true)
    }else{
        console.log(false)
    }
    
}


}palindrome([123,323,421,121])