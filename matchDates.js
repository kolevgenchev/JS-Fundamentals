function matchDates(arr){
let text=arr[0]
let pattern=/\b\d{2}([\.\-\/])[A-Z][a-z]{2}\1\d{4}/g
let final=text.matchAll(pattern)
for(el of final){
    let [day,month,year]=el[0].split(el[1])


    console.log(`Day: ${day}, Month: ${month}, Year: ${year}`)
}

}matchDates(['13/Jul/1928, 10-Nov-1934, , 01/Jan-1951,f 25.Dec.1937 23/09/1973, 1/Feb/2016'])