const myObj:object={id:1 , name:"Kaveh"}

const myArray:(string | number)[][]=[["kaveh"] , [2003] , ["khorshidi"]]

const tuple : [number , string]=[1 , "kaveh"]

const myTuple : [string , number]=["kaveh" , 10]

function sum (Code:string , Name:string):string {
    return `${Code} , ${Name}`
}
console.log( sum("1" , "Kaveh") )

let isArray:[number , string] = [1 , "koko"]