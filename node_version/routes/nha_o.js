var express = require("express");
var router = express.Router();

import Post from '../modules/post.js';

var __post = new Post();
__post.post().set_cols("banner");
router.get("/",(req,res)=>{
    let banner = JSON.parse(__post.post().read({"id":"banner"}));
    res.render("category",{
        banner : banner,
        category : "Nhà ở"
    })
});


router.get("/chung-cu",(req,res)=>{
    let banner = JSON.parse(__post.post().read({"id":"banner"}));
    res.render("category",{
        banner : banner,
        category : "Nhà ở - chung cư"
    })
});

router.get("/nha-lau",(req,res)=>{
    let banner = JSON.parse(__post.post().read({"id":"banner"}));
    res.render("category",{
        banner : banner,
        category : "Nhà ở - nhà lầu"
    })
});

router.get("/biet-thu",(req,res)=>{
    let banner = JSON.parse(__post.post().read({"id":"banner"}));
    res.render("category",{
        banner : banner,
        category : "Nhà ở - biệt thự"
    })
});

module.exports = router;