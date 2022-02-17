var objetoJS = {
    nombre: "fernando",
    edad: 30
}

console.log("Objeto litera", objetoJS);


var jsonString = JSON.stringify(objetoJS);

console.log(jsonString)


var objetoDesdeJson = JSON.parse (jsonString);

console.log(objetoDesdeJson);
console.log(objetoDesdeJson.nombre);
console.log(objetoDesdeJson.edad);