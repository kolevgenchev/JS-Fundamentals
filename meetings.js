function meetings (arr){
let obj={}
for (el of arr){
    let args=el.split(" ")
    let day=args[0]
    let name=args[1]
    if(!obj.hasOwnProperty(day)){
        obj[day]=name
        console.log(`Scheduled for ${day}`)
    }else{
        console.log(`Conflict on ${day}!`)
    }
    
}
for( el in obj){
    console.log(`${el} -> ${obj[el]}`)
}

}meetings(['Monday Peter',
'Wednesday Bill',
'Monday Tim',
'Friday Tim'])