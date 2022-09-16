function nextDate(year,month,day){

let currentCopy= new Date(year,month-1,day)
let nextDay=new Date(year,month-1,day+1)
month = '' + (nextDay.getMonth() + 1),
day = '' + nextDay.getDate(),
year = nextDay.getFullYear();
console.log(`${year}-${month}-${day}`)

}
nextDate(2016, 9, 30)