function deckOfCards (arr){
let listOfCards=arr.shift().split(", ")
let n=Number(arr.shift())
for(let i=0;i<n;i++){
    let comand=arr.shift().split(", ")
    if(comand[0]==="Add"){
        if(!listOfCards.includes(comand[1])){
            listOfCards.push(comand[1])
            console.log("Card successfully added")
        }else{
            console.log("Card is already in the deck")
        }
    }else if (comand[0]==="Remove"){
        if(listOfCards.includes(comand[1])){
            let index=listOfCards.indexOf(comand[1])
            listOfCards.splice(index,1)
            console.log("Card successfully removed")
        }else
            console.log("Card not found")
    }else if(comand[0]==="Remove At"){
        if(listOfCards[Number(comand[1])]!==undefined){
            listOfCards.splice(Number(comand[1]),1)
            console.log("Card successfully removed")
        }else{
            console.log("Index out of range")
        }
    }else if(comand[0]==="Insert"){
        if(listOfCards[Number(comand[1])]===undefined){
            console.log("Index out of range")
            continue;
        }
        if(listOfCards.includes(comand[2])){
            console.log("Card is already added")
            continue;
        }
        listOfCards.splice(Number(comand[1]),0,comand[2])
        console.log("Card successfully added")
    }
    }
    console.log(listOfCards.join(", "))
}

deckOfCards(["Two of Clubs, King of Spades, Five of Spades, Jack of Hearts",
"2",
"Add, Two of Clubs",
"Remove, Five of Hearts"])