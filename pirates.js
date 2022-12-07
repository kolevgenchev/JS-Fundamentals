function pirates(arr){
let cities={}
let array=[]
let comand=arr.shift()
while(comand!=="Sail"){
    let args=comand.split("||")
    let city=args[0]
    let population=Number(args[1])
    let gold=Number(args[2])
    let cityAvailable=array.find((x)=>x.city===city)
    if(cityAvailable){
        let index=array.indexOf(cityAvailable)
        array[index].population+=population
        array[index].gold+=gold
    }else{
        cities={city,population,gold}
        array.push(cities)
    }
    
    
    comand=arr.shift()
}


while(comand!=="End"){
    let line=comand.split("=>")
    if(line[0]==="Prosper"){
        let town=line[1]
        let gold=Number(line[2])
        
        if(gold<0){
            
            console.log("Gold added cannot be a negative number!")
        }else{
            let result=array.find((x)=>x.city===town)
            let index=array.indexOf(result)
            array[index].gold+=gold
            console.log(`${gold} gold added to the city treasury. ${town} now has ${array[index].gold} gold.`)
        }
        
    }else if(line[0]==="Plunder"){
        let cityName=line[1]
        let people=Number(line[2])
        let treasure=Number(line[3])
        let result=array.find((x)=>x.city === cityName)
        let index=array.indexOf(result)
        array[index].population-=people
        array[index].gold-=treasure
        console.log(`${cityName} plundered! ${treasure} gold stolen, ${people} citizens killed.`)
        if(array[index].population<=0 || array[index].gold<=0){
            array.splice(index,1)
            console.log(`${cityName} has been wiped off the map!`)
        }
            
        
    }
    comand=arr.shift()
}
if(array.length!==0){
    console.log(`Ahoy, Captain! There are ${array.length} wealthy settlements to go to:`)
    array.forEach(x=>console.log(`${x.city} -> Population: ${x.population} citizens, Gold: ${x.gold} kg`))
}else{
    console.log("Ahoy, Captain! All targets have been plundered and destroyed!")
}

}pirates(["Tortuga||345000||1250",
"Santo Domingo||240000||630",
"Havana||410000||1100",
"Sail",
"Plunder=>Tortuga=>75000=>380",
"Prosper=>Santo Domingo=>180",
"End"])