let express = require("express");
let router = express.Router();

import Admin from '../modules/admin.js';
import DateTime from '../modules/date_time.js';
let Ad = new Admin();

router.get("/", (req, res) => {
    if (Ad.isLogin) {
        res.render("admin");
    }else{
        res.render("admin_login");
    }
})


router.post("/isvalid?",(req,res)=>{
    let pwd = req.body.password;
    Ad.login(pwd);
    setTimeout(()=>{
        if(Ad.isLogin == true){
            res.render("isvalid",{ result : "Đăng nhập thành công"});
        }else{
            res.render("isvalid",{ result : "Đăng nhập thất bại"});
        }
    },4000) 
})

router.post("/function/create_new_post.py",(req,res)=>{
    let date_time = new DateTime();
    let get_data = req.body;
    let result = Object.assign(get_data,date_time);
    if(Ad.isLogin){
        let _rturn = Ad.media().insert(result);
        console.log(_rturn);
        if(_rturn == true){
            res.send( "Tạo bài viết thành công");
        }else{
            res.send( "Tạo bài viết thất bại");
        }
    }else{
        return res.send("Không đủ quyền truy cập");
    }
})

module.exports = router