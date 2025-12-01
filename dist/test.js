class animal {
    move() { console.log("moving..."); }
}
class Dog extends animal {
    bark() { console.log("woof!"); }
}
const tede = new Dog();
console.log(tede);
tede.move();
tede.bark();
export {};
//# sourceMappingURL=test.js.map