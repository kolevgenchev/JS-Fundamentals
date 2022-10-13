function list(arr){
let sorted=arr.sort()
counter=1
for(let i=0;i<sorted.length;i++){{
    console.log(`${counter}.${sorted[i]}`)
    counter++
}}
}list(['Potatoes', 'Tomatoes', 'Onions', 'Apples'])