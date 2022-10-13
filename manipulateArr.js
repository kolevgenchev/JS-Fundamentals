function manipulate (arr){
let curArr=arr.shift().split(" ")
for(let i=0;i<arr.length;i++){
    let comand=arr[i].split(" ")
    if(comand[0]==="Add"){
        curArr.push(Number(comand[1]))
    }else if(comand[0]==="Remove"){
        curArr=curArr.filter(a=>a!==comand[1])
    }else if (comand[0]==="RemoveAt"){
        curArr.splice(Number(comand[1]),1)
    }else if(comand[0]==="Insert"){
        curArr.splice(Number(comand[2]),0,comand[1])
    }
}
console.log(curArr.join(" "))

}manipulate(['4 19 2 53 6 43',
'Add 3',
'Remove 2',
'RemoveAt 1',
'Insert 8 3'])