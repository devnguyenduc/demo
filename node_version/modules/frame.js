export default class Frame{
    constructor(){
        this.error = false;
        this.SUCCESS = true;
    }
    ERROR(e){
        console.log("===================ERRROR=====================");
        console.log(e);
        console.log("=====================END======================");
        return this.error;
    }
}