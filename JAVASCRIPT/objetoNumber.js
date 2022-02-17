/*objeto number
var a = 10.456789;*/

//objeto booleano
 /*var a = new Boolean();
 var b = false;
 console.log(a);*/


 //Ojetos string

 var b = "Herrera";

var a = new String("Juan Fernando martinez rincon");
console.log(a);


console.log(a.toUpperCase());
console.log(a.toLowerCase());

var i = a.indexOf("Fernando")
console.log("La letra esta: ", i);

i =  a.lastIndexOf("n");
console.log("La letra esta: ", i);

var nombre = a.substring(0, a.indexOf(" "));
console.log(nombre);

//split funtion 
var split = a.split(" ");
console.log(split);
console.log(split.length);

//=====================

document.write("Hola mundo");


//fecha 
/*var hoy = new Date();
var fechaMilisegundos = new Date(1);

console.log(hoy);
console.log(fechaMilisegundos);

console.log(hoy.getFullYear());*/


var inicio = new Date();

for(var i = 0; i <15000; i++){
    console.log("Algo...")
}

var fin = new Date();
var duracion = fin.getTime() - inicio.getTime();
console.log(duracion, "Milisegundos");
console.log(duracion/1000, "segundos");
