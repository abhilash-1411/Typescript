const User={
    name:"Abhilash",
    email:"abhi@132",
    isInvite:true
}

// function createUser({name:string,isPaid:boolean}){

// }
// createUser({name:"dcsdcf",isPaid:false})

function createCOurse():{name:string,price:number }{
    return {name:"js",price:399}
}

type User={
    name:string,
    email:string,
    isActive:boolean;
}
function createUser(user:User):User{
    return {name:" ",email:" ",isActive:true}
}
createUser({name:" ",email:" ",isActive:true})
export {}

type User1={
    readonly _id:string,    //Readonly
    name:string,
    email:string,
    isActive:boolean,
    creditCardDetails?:number   //literals
}

let myUser:User1={
    _id:"1234",
    name:"Ab",
    email:"q@q",
    isActive:true
}
myUser.email="a@amail"
// myUser._id="1243"