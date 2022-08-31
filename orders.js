function orders (item,quantity){
    let sum=0
    switch(item){
    case "coffee":sum=1.50*quantity;break;
    case "water":sum =1.00*quantity;break;
    case "coke":sum=1.40*quantity;break;
    case "snacks":sum=2.00*quantity;break;
}
console.log(sum.toFixed(2))
}
orders("coffee", 1)