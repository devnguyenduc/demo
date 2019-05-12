import Frame from './frame.js';
import DateTime from './date_time.js';
import Data from './data.js';
export default class Post extends Frame{
    constructor(title="",describes="",id="",category="",tag="",content="",times=0,datetime = new DateTime()){
        super();
        this.title=title;
        this.describes = describes;
        this.id = id;
        this.category = category;
        let list_tag = tag.split(",");
        this.tag = Object.assign(list_tag);
        this.content = content;
        this.times = times;
        this.datetime = datetime;
        this.data = new Data();
    }

    post(){
        return this.data;
    }

    set(title="",describes="",id="",category="",tag="",content="",times=0,datetime=new Date()){
        this.title=title;
        this.describes = describes;
        this.id = id;
        this.category = category;
        this.content = content;
        let list_tag = tag.split(",");
        this.tag = Object.assign(list_tag);
        this.times = times;
        this.datetime = datetime;
        
    }

    set(object = new Object()){
        this.title= object.title;
        this.describes = object.describes;
        this.id = object.id;
        this.category = object.category;
        let list_tag = object.tag.split(",");
        this.tag = Object.assign(list_tag);
        this.content = object.content;
        this.times = object.times;
        this.datetime = object.datetime;
    }

    get(){
        return this;
    }
    get_str(){
        return JSON.stringify(this);
    }

    set_title(title){
        try{
            this.title = title;
        }catch(e){
            console.log(e);
        }
    }
    get_title(){
        return this.title;
    }

    set_describes(describes){
        try{
            this.describes = describes ;
        }catch(e){
            console.log(e);
        }
    }

    get_describes(){
        return this.describes;
    }

    set_id(id){
        try{
            this.id = id ;
        }catch(e){
            console.log(e);
        }
    }

    get_id(){
        return this.id;
    }

    set_category(category){
        try{
            this.category = category;
        }catch(e){
            console.log(e);
        }
    }
    get_category(){
        return this.category;
    }

    set_tag(tag){
        try{
            let list_tag = tag.split(',');
            this.tag = Object.assign(list_tag);
        }catch(e){
            console.log(e);
        }
    }

    get_tag(){
        return this.tag;
    }

    set_content(content){
        try{
            this.content = content ;
        }catch(e){
            console.log(e);
        }
    }

    get_content(){
        return this.content;
    }

    // return how many times user viewed this post
    get_times(){
        return this.times;
    }

    // return the object describes the time.
    get_Time(){
        return this.datetime;
    }
    // return full time;
    DateTime(){
        return this.datetime.datetime;
    }
}
