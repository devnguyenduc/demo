var express = require("express");
var router = express.Router();

import Post from '../modules/post.js';

var __post = new Post();
router.get("/",(req,res)=>{
    __post.post().set_cols("banner");
    let banner = JSON.parse(__post.post().read({"id":"banner"}));
    res.render("category",{
        banner : banner,
        category : "Đất dự án"
    })
});

module.exports = router;