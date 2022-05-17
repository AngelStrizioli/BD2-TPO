var Peliculas = require('../models/PeliculaModel');
    
let getPelis = (req, res) =>
{      
    console.log("llegue a leer");
    //Listar resultados
    Peliculas.find(function(err,listaPelis)
    {
        //devuelvo resultado query
        res.status(200).send(listaPelis);
        //si hay error
        (err)=>{
            res.status(500).send(err);
            console.log(err);
        } 
    });
           
};


let getPeliByNombre = (req, res) =>
{
    console.log(req.body);

    let idBusqueda = {nombrePeli: req.body.name}

    Peliculas.find(idBusqueda, function(err, listaPelis){
       
        res.status(200).send(listaPelis);
        
        (err)=>{
            res.status(500).send(err);
            console.log(err);
        } 
    })

};


let insertPeli = (req,res) =>
{    
    console.log(req.body);
    var newPeli = Peliculas({
        _id: req.body.id,
        nombrePeli: req.body.nombre,
        fechaEstreno: req.body.fechaEstreno,
        idioma: req.body.idioma,
        actores: req.body.actores,
        ratingIMDB: req.body.rating,
    });
    newPeli.save().
    then
    (
        (newPeli)=>
        {
            res.status(201).send(newPeli); //devuelvo resultado query       
        },
        (err)=>
        { 
            res.status(500).send(err);
            console.log(err);
        }
    ) 
};

module.exports = {insertPeli, getPelis, getPeliByNombre};
