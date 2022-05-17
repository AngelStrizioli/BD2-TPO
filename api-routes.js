// Initialize express router
let router = require('express').Router();
let apiController = require('./controllers/apiController');
       
// Set default API response
router.get('/default', function (req, res) 
{
    res.json(
    {
       status: 'API is Working',
       message: '200-Health',
    });
});

//EndPoint para leer las pelis
router.get('/leerPelis',function(req,res)
{
    console.log("pelis");
    apiController.getPelis(req,res);
});


//EndPoint para leer con filtro
//USAR POSTMAN PARA PROBAR
router.get('/filtrarpeli',function(req,res)
{
    console.log("filtrando");
    apiController.getPeliByNombre(req,res);
});

// inserta una pelicula que se recibe por parametro
router.post('/insertPeli',function(req,res)
{
    console.log("insertPeli");
    apiController.insertPeli(req,res);
});


// Export API routes
module.exports = router;

