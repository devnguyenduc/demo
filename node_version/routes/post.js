import Post from '../modules/post.js';

var express = require("express");
var router = express.Router();

function compare(a, b) {
    return b.digital - a.digital;
}

router.get("/get-post/lastest", (req, res) => {
    let __post = new Post();
    let lastest = {};
    lastest.result = new Array();
    let sort_array = __post.post().read_all_file().sort(compare);
    if (sort_array.length < 10) {
        for (let i = 0; i < sort_array.length; i++) {
            lastest.result.push(sort_array[i]);
        }
    } else {
        for (let i = 0; i < 10; i++) {
            lastest.result.push(sort_array[i]);
        }
    }

    lastest.vonghia = null;
    res.send(JSON.stringify(lastest));
})

router.get("/:id", (req, res) => {
    let obj = {};
    obj.vonghia = null;
    obj.id = req.param('id');
    let __post = new Post();
    let _post = new Post().post();
    _post.set_cols("banner");

    let result = __post.post().read(obj);
    result = JSON.parse(result);

    const forwarded = req.headers['x-forwarded-for'];
    const ip = forwarded ? forwarded.split(/, /)[0] : req.connection.remoteAddress;
    console.log(ip);
    res.render('post',
        {
            title: result.title,
            time: result.time,
            content : result.content,
            banner : JSON.parse(_post.read({"id":"banner"}))
        });
})

module.exports = router;