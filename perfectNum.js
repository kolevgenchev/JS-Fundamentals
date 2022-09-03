function perfectNum(num){
    let newNum=0
    for(let i=1;i<num;i++){
        if(num%i===0){
            newNum+=i
        }
    }

if(newNum===num){
    console.log("We have a perfect number!")
}else{
    console.log("It's not so perfect.")
}

}
perfectNum(29)