function sumOfOdd (num){
    let sum=0
    let counter=0
    for(let i=1;true;i++){
        if(i%2!==0||i===1){
            sum+=i
            
            console.log(i)
            counter++
            if(counter===num){
                break;
            }
        }
    }
    console.log(`Sum: ${sum}`)
}
sumOfOdd(5)