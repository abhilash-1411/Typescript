 abstract class TakePhoto {
    constructor(
        public cameraMode:string,
        public filter:string
    ){}
    abstract getSepia():void
    getReelTime():number{
        return 8
    }
}
class Insta extends TakePhoto{
    constructor(
        public cameraMode:string,
        public filter:string,
        public burst:number
    ){
   super(cameraMode,filter)
    }
    getSepia():void {
        console.log("Sepia");
        
    }
}
const ac=new Insta('test',"Test",3)