function bakery(arr){
let comand=arr.shift()
let food={}
let foods=[]
let soldFoodQuantity=0
while(comand!=="Complete"){
    let args=comand.split(" ")
    if(args[0]==='Receive'){
        let quantity=Number(args[1])
        
        let name=args[2]
        let result=foods.find(x=>x.name===name)
        if(quantity<=0){
            food={name}
            foods.push(food)
            comand=arr.shift();
            continue;
        }
        if(!result){
            food={name,quantity}
            foods.push(food)
            
        }else{
            let index=foods.indexOf(result)
            foods[index].quantity+=quantity
        }
        
    }else if(args[0]==="Sell"){
        let quantity=Number(args[1])
        let name=args[2]
        let result=foods.find(x=>x.name===name)
        if(!result){
            console.log(`You do not have any ${name}.`)
        }else{
            let index=foods.indexOf(result)
            if(foods[index].quantity-quantity<0){
                soldFoodQuantity+=foods[index].quantity
                foods.splice(index,1)
                console.log(`There aren't enough ${name}. You sold the last ${foods[index].quantity}`)
            }else {
                foods[index].quantity-=quantity
                console.log(`You sold ${quantity} ${name}.`)
                soldFoodQuantity+=quantity
                if(foods[index].quantity===0){
                    foods.splice(index,1)
                }
            }
        }
    }
    
    comand=arr.shift()
}
foods.forEach(x=>console.log(`${x.name}: ${x.quantity}`))
console.log(`All sold: ${soldFoodQuantity} goods`)

}bakery(["Receive 105 cookies",
"Receive 10 donuts",
"Sell 10 donuts",
"Sell 1 bread",
"Complete"])