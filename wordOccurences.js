function wordOccurences (arr){

let wordList=[]
for(el of arr){
    if(!wordList.includes(el)){
        wordList.push(el)
    }
}
let obj={}
for(el of wordList){
    obj[el]=0
}
for (el of arr){
   obj[el]++

}
let entries=Object.entries(obj)
let sortedArr=entries.sort((a,b)=>b[1]-a[1])
let finalObj={}
for(el of sortedArr){
    finalObj[el[0]]=el[1]
}

for(el in finalObj){
    console.log(`${el} -> ${finalObj[el]} times`)
}

}wordOccurences(["Here", "is", "the", "first", "sentence", "Here", "is", "another", "sentence", "And", "finally", "the", "third", "sentence"])