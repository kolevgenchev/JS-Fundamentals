function train (arr){
    let array=arr.shift().split(" ")
    let maxCapacity=Number(arr.shift())
    for (let el of arr){
        if(el.includes("Add")){
            if(el.length===5){
                array.push(Number(el[el.length-1])) 
            }else{
                let elAsArray=el.split(" ")
                let number =elAsArray.slice(-1).join("")
                array.push(Number(number))
            }
            
        }else{
            for(let i=0;i<array.length;i++){
                if(Number(array[i])+Number(el)<=maxCapacity){
                    array[i]=Number(array[i])+Number(el)
                    break;
                }else {
                    continue;
                }
            }
        }
    }
    console.log(array.join(" "))



}train(['0 0 0 10 2 4',
'10',
'Add 10',
'10',
'10',
'10',
'8',
'6'])