function factorial (num1,num2){
let firstSumFact=1
let secondSumFact=1
for(let i=num1;i>=1;i--){
firstSumFact*=i
}
for(let k=num2;k>=1;k--){
    secondSumFact*=k
    }
    console.log((firstSumFact/ secondSumFact).toFixed(2))
}

factorial(5,2)