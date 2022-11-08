function cats (arr){
class Meow {
constructor (name ,age){
    this.name=name
    this.age=age
}
meow (){
    console.log(`${this.name}, age ${this.age} says Meow`)
}
}
for(let el of arr){
    let args=el.split(" ")
    let name =args[0]
    let age=args[1]
    let cat = new Meow (name ,age)
    cat.meow()
}



}cats(['Mellow 2', 'Tom 5'])