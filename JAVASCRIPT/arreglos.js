
/*var arr =  [5,4,3,2,1];
console.log(arr);

console.log(arr[0],arr[4]);

arr.reverse();
console.log(arr);

arr = arr.map(function (elem){
    elem *=elem;
    return elem;
});
console.log(arr);

arr = arr.map(Math.sqrt);
console.log(arr);

arr = arr.join("|");
console.log(arr);

arr = arr.split("|");
console.log(arr);

arr.push("6")
console.log(arr);

arr.unshift("0")
console.log(arr);

console.log(arr.toString());

var elimine  = arr.pop(); //muestra el que se añadio 
console.log(elimine);

arr.splice(1,0,"10","20"); //eliminar algunos datos del array 
console.log(arr);

arr = arr.slice(1,3); //funcion opuesta al slice
console.log(arr);*/

//arreglos 2


var arr = [
    true,
    {nombre:"David",
    apellido:"Cruz"    
},
    function(){
        console.log("Estoy viviendo en un arreglo.");
    },
    function(persona){
        console.log(persona.nombre + " "+persona.apellido);
    },
    ["Fernando","Carlos","Hernando", "Melissa"]
];

console.log(arr);
console.log(arr[0]);
console.log(arr[1].nombre +" "+arr[1].apellido);
arr[2]();
arr[3](arr[1]); //funcion y le setea el dato del primer arreglo.
//arr[4]


console.log(arr[4][3]);




