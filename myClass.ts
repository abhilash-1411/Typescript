// class User {
//     //anything we dont mark is public by default
//   public email:string
//    private name:string
//    readonly city:string="Indore"    //for pvt we have write it
//    constructor(email:string,name:string){
//       this.email=email
//       this.name=name
//    }
// }
// const hitesh=new User("hdr123","abhi")
// hitesh.name
class User {
    // private _courseCount=1
    protected _courseCount=1
  readonly city:string="Indore"   
  constructor(
    public email:string,
    public name:string,
    // private  userId:string
){
  }
  private deleteToken(){
   console.log("Token deleted");
   
  }
  //getter
  get getAppleEmail():string {
     return `apple${this.email}`
  }

  get courseCount():number{
    return this._courseCount
  }
  //setter
  set courseCount(courseNum){
    if(courseNum<=1){
        throw new Error("Course count should be more than one")
        }
        this._courseCount=courseNum
  }
}
class subUser extends User {
    isFamily:boolean=true
    changeCourseCount(){
        this._courseCount=4
    }
}