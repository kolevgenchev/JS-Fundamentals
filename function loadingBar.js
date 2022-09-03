function loadingBar(num){
    let numDevidedBy10=num/10
    let dots=10-numDevidedBy10
    let arrBar=""
    for(let i=0;i<numDevidedBy10;i++){
        arrBar+="%"
    }
    for(let i=0;i<dots;i++){
        arrBar+="."
    }
    
    function loading (num){
        if(num!=100){
            return "Still loading..."
        }else{
            return "Complete !"
        }
    }

    console.log(`${num}% [${arrBar}]`)
    console.log(loading(num))


}
loadingBar(5)