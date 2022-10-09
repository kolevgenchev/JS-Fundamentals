function chars (char1,char2){
let char11=char1.charCodeAt()
let char22=char2.charCodeAt()
let max=Math.max(char11,char22)
let min=Math.min(char11,char22)
let str=""
for(let i=min+1;i<max;i++){
    let current=String.fromCharCode(i)
    str+=current+" "
}
console.log(str)
}
chars('a','d')