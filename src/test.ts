const myFunc = ( a:number  ,  b:number , run:()=>void) => {
    let box = a + b
    console.log(box)
    run()
}

myFunc(2 , 2 , ()=>{console.log("object")})
