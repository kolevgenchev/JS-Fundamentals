function towns (arr){
    let objects=[]
    for (el of arr){
        let args=el.split(" | ")
        let obj={}
        obj["town"]=args[0]
        obj["latitude"]=Number(args[1]).toFixed(2)
        obj["longitude"]=Number(args[2]).toFixed(2)
        objects.push(obj)
    }

for (el of objects){
    
    console.log(el)
}

}towns(['Sofia | 42.696552 | 23.32601',
'Beijing | 39.913818 | 116.363625'])