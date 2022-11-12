function adressBook (arr){
let obj={}

let nameArr=[]
for(el of arr){
let args=el.split(":")
let name=args[0]
if(!nameArr.includes(name)){
    nameArr.push(name)
}

let adress=args[1]

if(nameArr.includes(name)){
    obj[name]=adress
    
}else{

    obj[name]=adress
    arrFinal.push(`${name} ${adress}`)
}
}
let sortedNames=nameArr.sort()
for(el of sortedNames){
    console.log(`${el} -> ${obj[el]}`)
}

}adressBook(['Tim:Doe Crossing',
'Bill:Nelson Place',
'Peter:Carlyle Ave',
'Bill:Ornery Rd'])