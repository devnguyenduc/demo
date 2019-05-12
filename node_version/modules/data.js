import Frame from './frame';
let source = "source/";
let dot = ".json";
let fs = require("fs");
export default class Data extends Frame{
    constructor(_id = 0){
        super();
        this.path = '';
        this._id = _id;
        this.collection = "";
    }
    set_cols(collection = ""){
        this.collection = collection + "/";
    }
    read_dir(){
        try{
            this.path = source;
            if(fs.existsSync(this.path)){
                let readdir = fs.readdirSync(this.path);
                let result = new Array();
                readdir.forEach(element=>{
                    result.push(element);
                })
                return result;
            }
            else{
                return false;
            }
        }catch(e){
            return this.ERROR(e);
        }
    }
    //Reac one object with their id 
    read(obj){
        try{
            this.path = source + this.collection + obj.id + dot
            if(fs.existsSync(this.path)){
                let result = fs.readFileSync(this.path,'utf-8');
                return result;
            }else{
                return false;
            }
        }catch(e){
            return this.ERROR(e);
        }
    }

    read_all_file(){
        let allfile = this.read_dir();
        let result = new Array();
        allfile.forEach(value=>{
            if(value.toLowerCase().endsWith(dot)){
                let path = source + value;
                let read = fs.readFileSync(path,'UTF-8');
                result.push(JSON.parse(read));
            }
        })
        return result;
    }

    insert(obj){
        try{
            this.path = source + this.collection  + obj.id + dot;
            fs.writeFileSync(this.path,JSON.stringify(obj),'utf-8',(err,success)=>{
                if(err){
                    return this.ERROR(err);
                }else{
                    return this.SUCCESS;
                }
            });
        }catch(e){
            return this.ERROR(e);
        }
    }

    delete(obj){
        try{
            this.path = source + this.collection + obj.id + dot;
            fs.unlinkSync(this.path,(err)=>{
                if(err){
                   return this.ERROR(err);
                }else{
                    return this.SUCCESS;
                }
            })
        }catch(e){
            return this.ERROR(e);
        }
    }

    update(where,how){
        try{
            this.path = source + this.collection + where.id + dot;
            let file_update = fs.readFileSync(this.path,"utf-8");
            file_update = JSON.parse(file_update);
            console.log(file_update);
            delete how.id;
            let new_update = Object.assign(file_update,how);
            new_update = JSON.stringify(new_update);
            console.log(new_update);
            fs.writeFileSync(this.path,new_update,'utf-8');
            return this.SUCCESS;
        }catch(e){
            return this.ERROR(e);
        }
    }
}