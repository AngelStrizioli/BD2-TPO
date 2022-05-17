# BD2-TPO
Pequeño ejemplo de NodeJs y Mongo a traves de Postman.

## Cómo ejecutarlo

Simplemente clonando el repositorio, y ejecutando luego los siguientes comandos:

```
npm install
npm start
```

Luego de esta ejecución el servidor estará escuchando en la dirección [localhost:8080](localhost:8080)

***

## Endpoints

```
http://localhost:8080/leerPelis
```

- Devuelve todas las películas que se encuentran en la base de datos, y dentro de ellas las funciones cargadas.

***

```
http://localhost:8080/filtrarPelis
```

- Recibe el nombre de una película y devuelve la/las (array) películas que coincidan con el parámetro.
- Parámetro: name
***

```
http://localhost:8080/insertPeli
```
- Recibe una pelicula con el formato detallado abajo (así debe armarse el body) y la guarda en la base de datos

```js
{
    "id": 1,
    "nombre": "Nombre de la pelicula",
    "fechaEstreno": "dd/mm/aaaa",
    "idioma": "ingles",
    "actores": ["Actor 1","Actor 2", "etc"],
    "rating": "0-5 acepta float"
}
```
***