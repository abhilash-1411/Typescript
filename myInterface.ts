interface User{
    readonly dbId:number
    email:string
    userId:number
    googleId?:string
    startTrial():string
    getCoupan(coupanName:string, vlaue:number):number
}

// Reopening of the interfce
interface User{
    githubId:string
}

//Inheritance in Interface
interface Admin extends User{
    role: "admin"| "ta" |"learner"
}

const hitesh:Admin={dbId:1,email:"hitesh2123",userId:1324,
role:"learner",
startTrial:()=>{
    return "Trial started "
},
    getCoupan:(Name:"flat10",off:10)=>{
        return 10
    },
    githubId:"abhi-22"
}
hitesh.email="hit@123"
// hitesh.dbId=1  cant change the readonly prop