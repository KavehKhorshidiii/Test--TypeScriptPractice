class animal{
    move(){console.log("moving...")}
}
class Dog extends animal{
    bark(){console.log("woof!")}
}

const tede:Dog = new Dog()
console.log(tede)

tede.move()
tede.bark()