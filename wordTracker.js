function wordTracker (arr){
    let words=arr.shift().split(" ")
    let obj={}
    for (el of words){
        obj[el]=0
    }
    for(el of arr){
        if(obj.hasOwnProperty(el)){
            obj[el]++
        }
    }
    let sort=Object.entries(obj)
    let sortedArr=sort.sort((a,b)=>b[1]-a[1])
    let finalObj={}
    for(el of sortedArr){
        finalObj[el[0]]=el[1]
    }
    for(el in finalObj){
        console.log(`${el} - ${obj[el]}`)
    }
}wordTracker([
    'this sentence', 
    'In', 'this', 'sentence', 'you', 'have', 'to', 'count', 'the', 'occurrences', 'of', 'the', 'words', 'this', 'and', 'sentence', 'because', 'this', 'is', 'your', 'task'
    ])