var express = require("express");
var router = express.Router();

import Post from '../modules/post.js';

var __post = new Post();
router.post("/",(req,res)=>{
    __post.post().set_cols("banner");
    let banner = JSON.parse(__post.post().read({"id":"banner"}));
    res.render("search",{
        banner : banner,
    })
});

router.get("/",(req,res)=>{
    __post.post().set_cols("banner");
    let banner = JSON.parse(__post.post().read({"id":"banner"}));
    res.render("search",{
        banner : banner,
    })
});


module.exports = router;