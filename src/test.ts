function sum(num1:number , num2:number):number{
    return num1 + num2
}
const arr = [10 , 10] as const

console.log(sum(...arr))