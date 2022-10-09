function passValid (pass){
    let length=false
    let lettersAndNums=true
    let counter=0
    let counterIsTrue=false
if(pass.length>=6&&pass.length<=10){
    length=true
}
for(let i=0;i<pass.length;i++){
    let currentLetter=pass[i]
    let numOfChar=currentLetter.charCodeAt()
    if((numOfChar>=48&&numOfChar<=57)||(numOfChar>=65&&numOfChar<=90)||numOfChar>=97&&numOfChar<=122){
        continue;
    }else{
        lettersAndNums=false
        break;
    }
}
for(let i=0;i<pass.length;i++){
    let currentLetter=pass[i]
    let cur=Number(currentLetter)
    if(!isNaN(cur)){
        counter++
    }
    if(counter>=2){
        counterIsTrue=true;
        break;
    }
}

if(length&&lettersAndNums&&counterIsTrue){
    console.log("Password is valid")
}else if(!length&&lettersAndNums&&counterIsTrue){
    console.log("Password must be between 6 and 10 characters")
}else if(length&&!lettersAndNums&&counterIsTrue){
    console.log("Password must consist only of letters and digits")
}else if(length&&lettersAndNums&&!counterIsTrue){
    console.log("Password must have at least 2 digits")
}else if(!length&&lettersAndNums&&!counterIsTrue){
    console.log("Password must be between 6 and 10 characters")
    console.log("Password must have at least 2 digits")
}else if(!length&&!lettersAndNums&&counterIsTrue){
    console.log("Password must be between 6 and 10 characters")
    console.log("Password must consist only of letters and digits")
}else if (length&&!lettersAndNums&&!counterIsTrue){
    console.log("Password must consist only of letters and digits")
    console.log("Password must have at least 2 digits")
}

}
passValid('Pa$s$s')