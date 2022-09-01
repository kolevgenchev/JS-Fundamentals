function exercise(num1,num2,operation){
    let subtract=(x,y)=>x-y
    let multiply=(x,y)=>x*y
    let divide=(x,y)=>x/y
    let add=(x,y)=>x+y
    switch(operation){
        case "subtract":return subtract(num1,num2);break;
        case "multiply":return multiply(num1,num2);break;
        case "divide":return divide(num1,num2);break;
        case "add":return add(num1,num2);break;
        
    }
    
    }
    console.log(exercise(5,5,"divide"))
     
    