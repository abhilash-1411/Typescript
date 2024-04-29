const score:Array<number> =[]
const names:Array<string> =[]

function identityOne(val:string | boolean):boolean | string{
    return val
}

function identityTwo(val:any):any{
    return val
}
function identityThree<Type>(val:Type):Type{
    return val
}
// identityThree("ABHI")

function identityFour<T>(val:T):T{
    return val
}
interface Bootle{
    brand:string
    price:number
}
identityFour<Bootle>({})



function getSearchProducts<T>(products:T[]):T{
    const myIndex=3
    return products[myIndex]
}

const getMoreSearchedProducts=<T>(products:T[]):T =>{
    const myIndex=4
    return products[myIndex]

}
interface Database{
    connection:string
    email:string
    password:string
}

function anotherFunction<T,U extends Database>(val1:T,val2:U): object {
   return {
    val1,
    val2
   }
}
anotherFunction("hii",{})

//Generic Classes
interface Quiz{
    name:string,
    type:string
}
interface Courses{
    name:string
    author:string
    subject:string

}
class Sellable<T>{
    public cart:T[]=[]
    addToCart(product:T){
        this.cart.push(product)
    }
}