function companyUsers (arr){
    let obj={}
for(el of arr){
let [company,userId]=el.split(" -> ")
if(!obj.hasOwnProperty(company)){
    obj[company]=[]
}
if(!obj[company].includes(userId)){
    obj[company].push(userId)
}

}
let sortedArr=Object.entries(obj).sort()
let sortedObj={}
for(el of sortedArr){
    sortedObj[el[0]]=el[1]
}
let final=Object.entries(sortedObj)
for(el of final){
    console.log(el[0])
    if(el[1].length!==1){
        for(el of el[1]){
            console.log(`-- ${el}`)
        }
    }else{
        console.log(`-- ${el[1][0]}`)
    }
}
}companyUsers([
    'SoftUni -> AA12345',
    'SoftUni -> CC12344',
    'Lenovo -> XX23456',
    'SoftUni -> AA12345',
    'Movement -> DD11111'
    ])