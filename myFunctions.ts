function addTwo(num:number):number{
    return num+2;
    // return "hello"
}

addTwo(5);

function getUpper(val:string){
    return val.toUpperCase()
}

getUpper("vdfvggv");

function signUp(name:string,email:string,isPaid:boolean){

}
let loginUser=(name:string,email:string,isPaid:boolean=false)=>{}
signUp('abhi','abhi123',true);

loginUser("abhi","abhi@123");

//
// function getValue(myVal:number):boolean{
//     if(myVal>5){
//         return true
//     }
//     return "200 OK"
// }

const getHello=(s:string):string=>{
    return " "
}
const heroes=["thor","hulk","spiderman"];
// const heroes=[1,2,3];

heroes.map((hero):string=>{
    return `hero is ${hero}`
})

function consoleError(errmsg:string):void{
    console.log(errmsg);
    
} 
function handleError(errmsg:string):never{
   throw new Error(errmsg)
    
} 
export {}