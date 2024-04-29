let score :number |string =33
score=44
score="55"

type User={
    name:string,
    id:number
}
type Admin={
    username:string,
    id:number
}

let abhi: User |Admin ={name:"Abhi ",id:123}

abhi={username:"rohan",id:456}

function getDbId(id:number |string){
    console.log(`DB id is ${id}`)
}
getDbId(3)
getDbId("3")

const data:number[]=[1,2,3]
const data2:string[]=["1","2","3"]
const data3:(string |number)[]=["1","2",3]