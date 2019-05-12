import Frame from "./frame.js";
import Data from "./data.js";
import DataBase from "./database.js"

export default class Admin extends Frame {
    constructor() {
        super();
        this.db_pwd = "";
        this.db_id = 'mongodb://admin:';
        this.db_link = '@ds233452.mlab.com:33452/';
        this.db_db = 'heaven_luxury';
        this.db_url = this.db_id + this.db_pwd + this.db_link + this.db_db;
        this.isLogin = false;
        this.collection = "";
        this.db = new DataBase();
        this.data = new Data();
    }

    login(password) {
        try {
            if (this.isLogin == false) {
                this.db_pwd = password;
                this.set_url();
                this.db.set_url(this.url());
                this.db.connect();
                setTimeout(() => {
                    if (this.db.isclient == true) {
                        this.isLogin = true;
                    } else {
                        this.isLogin = false;
                    }
                },3000)
            } else {
                return "Bạn đã đăng nhập vào tài khoản rồi.";
            }

        } catch (e) {
            return this.ERROR(e);
        }
    }

    set_url() {
        this.db_url = this.db_id + this.db_pwd + this.db_link + this.db_db;
    }

    url() {
        return this.db_url;
    }

    media(){
        return this.data;
    }

    setTopBanner(top_banner) {
        try {
            if (this.isLogin) {
                let methods = new Data();
                let new_s = {
                    "id": "banner",
                    "top_banner": top_banner
                }

                methods.update(new_s);
            }
        } catch (e) {
            return this.ERROR(e);
        }
    }

    logout() {
        if (this.isLogin) {
            this.db.disconnect();
            this.isLogin = false;
            return "Logout Succesfull!"
        } else {
            return "You haven't yet loginv3"
        }
    }
}
