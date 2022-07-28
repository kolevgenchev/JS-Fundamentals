function vacation (peopleCount,typeOfGroup,dayOfWeek){
    let totalPrice=0
    if(dayOfWeek==="Friday"){
    switch(typeOfGroup){
        case "Students":totalPrice=peopleCount*8.45;break;
        case "Business":if(peopleCount>=100){peopleCount-=10};totalPrice=peopleCount*10.90;break;
        case "Regular":totalPrice=peopleCount*15;break;
    }
    }else if (dayOfWeek==="Saturday")
    switch(typeOfGroup){
        case "Students":totalPrice=peopleCount*9.80;break;
        case "Business":if(peopleCount>=100){peopleCount-=10};totalPrice=peopleCount*15.60;break;
        case "Regular":totalPrice=peopleCount*20;break;
    }else if(dayOfWeek==="Sunday")
    switch(typeOfGroup){
        case "Students":totalPrice=peopleCount*10.46;break;
        case "Business":if(peopleCount>=100){peopleCount-=10};totalPrice=peopleCount*16;break;
        case "Regular":totalPrice=peopleCount*22.50;break;
    }
    if(typeOfGroup==="Students"&&peopleCount>=30){
    totalPrice=totalPrice*0.85
    }else if(typeOfGroup==="Regular"&&peopleCount>=10&&peopleCount<=20){
        totalPrice=totalPrice*0.95
    }
    console.log(`Total price: ${totalPrice.toFixed(2)}`)
    }
vacation(30,"Students","Sunday")