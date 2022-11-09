function storeProvision (localStore,pending){
let localStoreObj={}
let nonExistent=[]
for(let i=0;i<localStore.length;i++){
    if(i%2===0){
        localStoreObj[localStore[i]]=Number(localStore[i+1])
    }
}
for(let i=0;i<pending.length;i++){
    if(i%2===0){
    if(localStoreObj.hasOwnProperty(pending[i])){
        localStoreObj[pending[i]]+=Number(pending[i+1])
    }else{
        nonExistent.push(pending[i])
        nonExistent.push((pending[i+1]))
    }
}

}

for(let i=0;i<nonExistent.length;i++){
    if(i%2===0){
        localStoreObj[nonExistent[i]]=Number(nonExistent[i+1])
    }
}
for(el in localStoreObj){
    console.log(`${el} -> ${localStoreObj[el]}`)
}

}storeProvision([
    'Salt', '2', 'Fanta', '4', 'Apple', '14', 'Water', '4', 'Juice', '5'
    ],
    [
    'Sugar', '44', 'Oil', '12', 'Apple', '7', 'Tomatoes', '7', 'Bananas', '30'
    ])