var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'soy un capo' });
});
/*get nosotros page */
router.get("/nosotros",(req, res)=>{
  res.render("pages/nosotros")
});
router.get("/contacto",(req, res)=>{
  res.render("pages/contacto")
});
module.exports = router;
