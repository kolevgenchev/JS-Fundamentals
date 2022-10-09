function loading (num){
let firstStr=""
    if(num<100){
     firstStr+="Still loading..."   
    }else{
        firstStr+="100% Complete!"
    }

let str2=""
let percentages=num/10
let dots =10-percentages
let stringPercentages="%".repeat(percentages)
let stringDots=".".repeat(dots)
if(num<100){
    console.log(`${num}% [${stringPercentages}${stringDots}]`) 
    console.log(firstStr)
     
   }else{
       firstStr="100% Complete!"
       console.log(firstStr)
       console.log("[%%%%%%%%%%]")
   }
}loading(100)