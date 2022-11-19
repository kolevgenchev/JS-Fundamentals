function schoolGr (arr){
    let obj={}
    for (el of arr){
        let newArr=el.split(" ")
        let name =newArr.shift()
        let grades=newArr.map(Number)
        if(obj.hasOwnProperty(name)){
            obj[name]=obj[name].concat(grades)
        }else{
            obj[name]=grades
        }
    }
   let entries=Object.entries(obj)
   let sorted=entries.sort((a,b)=>a[0].localeCompare(b[0]))
   let newObj={}
    for (el of sorted){
        newObj[el[0]]=el[1]
    }
    
    for (el in newObj){
        let grades=newObj[el]
        let sum=0
        for (currentGrade of grades){
            sum+=currentGrade
        }
        let final=sum/grades.length
        console.log(`${el}: ${final.toFixed(2)}`)
    }

}schoolGr(['Lilly 4 6 6 5',
'Tim 5 6',
'Tammy 2 4 3',
'Tim 6 6'])