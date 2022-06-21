var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'HARRY POTTER' });
});
/*get nosotros page */
router.get("/buscar",(req, res)=>{
  //guardar en la variable lo que escribio el usuario en la consola
  let{ termino} =re.query;
  //mostrar en la terminal
  console.log(req.query.termino);
  res.send("estas en buscar")
});
router.post("/agregar-libro",(req, res)=>{
  console.log(req.body);
  let {titulo, autor, precio} = req.body;
  res.send(`agregaron ${titulo } ${autor} ${precio}`
  )
});

router.get("/agregar",(req, res)=>{
  res.render("pages/agregar")
});

router.get("/nosotros",(req, res)=>{
  res.render("pages/nosotros")
});
router.get("/contacto",(req, res)=>{
  res.send("pages/contacto")
});
module.exports = router;
