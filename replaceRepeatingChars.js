function replaceChars(str){
    let strFinal=""
for(let i=0;i<str.length;i++){
    let current=str[i]
    let second=str[i+1]
    if(current===second){
        continue;
    }else{
        strFinal+=current
    }
}
console.log(strFinal)
}replaceChars('aaaaaabbbbbcdddeeeedssaaaaaa')