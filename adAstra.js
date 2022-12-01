function adAstra (arr){
// let pattern=/([#|])[A-Z][a-z]+\1\d{2}\/\d{2}\/\d{2}\1\d{0,10000}\1/g
let pattern=/([#\|])[A-Za-z ]+\1\d{2}\/\d{2}\/\d{2}\1\d+\1/gm
let matches=arr[0].matchAll(pattern)
let calls=0
let allEls=[]
for(el of matches){
    let arrayOfEls=el[0].split(el[1]).filter((x)=>x.length>0)
    allEls.push(arrayOfEls)
    calls+=Number(arrayOfEls[arrayOfEls.length-1])
}
console.log(`You have food to last you for: ${Math.floor(calls/2000)} days!`)
for(el of allEls){
    console.log(`Item: ${el[0]}, Best before: ${el[1]}, Nutrition: ${el[2]}`)
}


}adAstra([ '$$#@@%^&#Fish#24/12/20#8500#|#Incorrect#19.03.20#450|$5*(@!#Ice Cream#03/10/21#9000#^#@aswe|Milk|05/09/20|2000|' ])