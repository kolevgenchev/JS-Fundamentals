function houseParty(arr){
    let guestList=[]
    for(let i=0;i<arr.length;i++){
        let currentCheck=arr[i]
        if(currentCheck.includes("is going")){
            let splited=currentCheck.split(" ")
            if(!guestList.includes(splited[0])){
                guestList.push(splited[0])
            }else{
                console.log(`${splited[0]} is already in the list!`)
            }
        }else{
            let splited=currentCheck.split(" ")
            if(guestList.includes(splited[0])){
                let index=guestList.indexOf(currentCheck[0])
                guestList.splice(index,1)
            }else{
                console.log(`${splited[0]} is not in the list!`)
            }
        }
    }

console.log(guestList.join("\n"))


}houseParty(['Tom is going!',
'Annie is going!',
'Tom is going!',
'Garry is going!',
'Jerry is going!'])