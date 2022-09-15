function login (arr){
let password=arr[0]
let pass=""
let counter=0;
for(let i=password.length-1;i>=0;i--){
let currentChar=password[i]
pass+=currentChar
}
for(let i=1;i<arr.length;i++){
    let current=arr[i]
    if(current===pass){
        console.log(`User ${arr[0]} logged in.`)
        return;
    }else if(i!==0){
        
        counter++
        if(counter===4){
            console.log(`User ${arr[0]} blocked!`)
        return;
        }
        console.log("Incorrect password. Try again.")
        continue;
}
}
}
login(['sunny',"sunny",'cloudy','ynrnus','not sunny'])