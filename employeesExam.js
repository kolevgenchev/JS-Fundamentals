function employees (arr){
let regex=/(?<name>([A-Z][a-z]{2,} [A-Z][a-z]{2,}))[#]+(?<ocupation>(([A-Z][a-z]+&){0,3})[A-Z][a-z]+)([0-9][0-9])(?<clinic>([A-Z][a-z]+) ([A-Z][a-zA-Z.]+))/gm
let n=Number(arr.shift())


for(let i=0;i<n;i++){
    let valid=arr[i].match(regex)
    if(valid){
        let valid=regex.exec(arr[i])
        let newOcupation=valid.groups["ocupation"]
        newOcupation = newOcupation.split('&').join(' ') 
        console.log(`${valid.groups["name"]} is ${newOcupation} at ${valid.groups["clinic"]}`)
    }
}

}employees(["4",
"Peter PetrovPsychology&Teachers25School Ltd.",
"Kalin kalinov#Special Education Teachers00 School Ltd.",
"Lilyana Kuncheva#### Tutor999School JSC",
"Kliment Genchev#Teacher&Assistants20School Ltd."])