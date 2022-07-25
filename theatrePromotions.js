function theatrePromotions(typeOfDay,ageOfPerson){
    let price=0;
    let flag=false;
    if(ageOfPerson>=0&&ageOfPerson<=18){
        switch(typeOfDay){
            case "Weekday":price=12;break;
            case "Weekend":price=15;break;
            case "Holiday":price=5;break;
        }
    }else if(ageOfPerson>18&&ageOfPerson<=64){
        switch(typeOfDay){
            case "Weekday":price=18;break;
            case "Weekend":price=20;break;
            case "Holiday":price=12;break;
        }
    }else if(ageOfPerson>64&&ageOfPerson<=122){
        switch(typeOfDay){
            case "Weekday":price=12;break;
            case "Weekend":price=15;break;
            case "Holiday":price=10;break;
        }
}else {
    console.log("Error!")
  flag=true
}
if(flag){

}else {
    console.log(`${price}$`)
}

}
theatrePromotions("Weekday",122)