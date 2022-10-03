function blackFlag (arr){
let days=Number(arr[0])
let dailyPlunder=Number(arr[1])
let expectedPlunder=Number(arr[2])
let currentPlunder=0
let DayCounter=0
for(let i=0;i<days;i++){
    DayCounter++
    currentPlunder+=dailyPlunder
    if(DayCounter%3===0){
        currentPlunder+=dailyPlunder*0.5
    }if (DayCounter%5===0){
        currentPlunder*=0.70
    }
}
if(currentPlunder>=expectedPlunder){
    console.log(`Ahoy! ${currentPlunder.toFixed(2)} plunder gained.`)
}else {
   let left= (currentPlunder/expectedPlunder)*100
   
   console.log(`Collected only ${left.toFixed(2)}% of the plunder.`)
}

}
blackFlag(["10",
"20",
"380"])