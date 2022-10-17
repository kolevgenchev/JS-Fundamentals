function arrModifyer(arr){
let initialArr=arr.shift().split(" ").map((c)=>Number(c))
let index=0
let comand=arr[index]

while(comand!=="end"){
    let current=comand.split(" ")
    if(current[0]==="swap"){
       let firstEl=initialArr[Number(current[1])]
       let secEl=initialArr[Number(current[2])]
       initialArr[Number(current[1])]=Number(secEl)
       initialArr[Number(current[2])]=Number(firstEl)
    }else if (current[0]==="multiply"){
        let res=initialArr[Number(current[1])]*initialArr[Number(current[2])]
        initialArr[Number(current[1])]=Number(res)
        
    }else if(current[0]==="decrease"){
        
        initialArr=initialArr.map((x)=>x-1)

    }
    index++
    comand=arr[index]
}
console.log(initialArr.join(", "))

}
arrModifyer( [
    '23 -2 321 87 42 90 -123',
    'swap 1 3',
    'swap 3 6',
    'swap 1 0',
    'multiply 1 2',
    'multiply 2 1',
    'decrease',
    'end'
  ])