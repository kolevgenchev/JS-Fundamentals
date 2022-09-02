function softUniReception (arr){
    let maxCapacityPerHour=Number(arr[0])+Number(arr[1])+Number(arr[2])
    let allStudentsPerDay=Number(arr[3])
    let hours=Math.ceil(allStudentsPerDay/maxCapacityPerHour)
    let breaksCounter=0
    if(hours<=3){
       return console.log(`Time needed: ${Math.ceil(hours)}h.`)
    }

    for(let i=3;i<hours;i++){
        if(i%3===0){
            breaksCounter++
        }



}
console.log(`Time needed: ${hours+breaksCounter}h.`)



}
softUniReception(['5','6','4','20'])