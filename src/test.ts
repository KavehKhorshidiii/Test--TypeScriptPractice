interface myNum {
    (a:number , b:number):number
}

const box:myNum = (x , y)=>x + y

console.log( box(2 , 2) )