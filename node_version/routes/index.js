var express = require('express');
var router = express.Router();

import Post from '../modules/post';
let __post = new Post().post();
/* GET home page. */
router.get('/', function(req, res, next) {
  __post.set_cols("banner");
  let banner = JSON.parse(__post.read({"id":"banner"}));
  res.render('index', {banner : banner});
});

module.exports = router;
