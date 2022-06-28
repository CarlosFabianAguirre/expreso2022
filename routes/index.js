var express = require('express');
var router = express.Router();

const api = require("../api");



/* GET home page. */
router.get('/', async(req, res) => {
  const libros = await api.getBooks();
  console.log(libros);
  res.render('index', { title: 'HARRY POTTER',libros });
//res.send(libros);
});

// Crear una ruta de /autores
// Mostrar el listado en JSON de todos los autores
router.get('/autores', async (req, res) => {
  const autores = await api.getAuthors();

  res.send(autores);
});


router.get("/libro/:id", async (req, res)=>{

  const libro = await api.getBookById(req.params.id);
  //console.log(libro);
  // res.send (`estas viendo el libro ${req.params.id}`);
  res.render("pages/libro", {libro});
});









/*get nosotros page */
router.get("/buscar",async (req, res)=>{
  //guardar en la variable lo que escribio el usuario en la consola
  let{ termino} =req.query;
  //mostrar en la terminal
  console.log(termino);
  const resultados = await api.findBookByTitle(termino);

  res.send(resultados)
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
