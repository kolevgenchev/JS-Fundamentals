function town (arr){
let registry={}
for(el of arr){
    let [city,population]=el.split(" <-> ")
    population=Number(population)
    if(!registry.hasOwnProperty(city)){
        registry[city]=population
    }else{
        registry[city]+=population
    }
}
for(el in registry){
    console.log(`${el} : ${registry[el]}`)
}

}
town(['Istanbul <-> 100000',
'Honk Kong <-> 2100004',
'Jerusalem <-> 2352344',
'Mexico City <-> 23401925',
'Istanbul <-> 1000'])