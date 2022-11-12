function phoneBook (arr){
let obj={}
for(let line of arr){
    let args=line.split(" ")
    let name=args[0]
    let number=args[1]
    obj[name]=number
}
for(el in obj){
    console.log(`${el} -> ${obj[el]}`)
}
}
phoneBook(['Tim 0834212554',
'Peter 0877547887',
'Bill 0896543112',
'Tim 0876566344'])