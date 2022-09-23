function calc (firstNum,operator,secondNum){
   
switch(operator){
    case '+':result=firstNum+secondNum;break;
    case '-':result=firstNum-secondNum;break;
    case '*':result=firstNum*secondNum;break;
    case '/':result=firstNum/secondNum;break;
}
console.log(result.toFixed(2))
}
calc(10,
    '/',
    10)