var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var peliculaSchema = new Schema({
    _id: String,
    nombrePeli: String,
    fechaEstreno: Date,
    idioma: String,
    actores: [String],
    ratingIMDB: String,
});

var Peliculas = mongoose.model('Pelicula', peliculaSchema);
console.log("se creo modelo");
module.exports = Peliculas;