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
var User = /** @class */ (function () {
    function User(email, name) {
        this.email = email;
        this.name = name;
        this._courseCount = 1;
        this.city = "Indore";
    }
    User.prototype.deleteToken = function () {
        console.log("Token deleted");
    };
    Object.defineProperty(User.prototype, "getAppleEmail", {
        //getter
        get: function () {
            return "apple".concat(this.email);
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(User.prototype, "courseCount", {
        get: function () {
            return this._courseCount;
        },
        //setter
        set: function (courseNum) {
            if (courseNum <= 1) {
                throw new Error("Course count should be more than one");
            }
            this._courseCount = courseNum;
        },
        enumerable: false,
        configurable: true
    });
    return User;
}());
