

var nombre = "Juan carlos";

var persona= {
    nombre:"Maria",
    apellido:"Rincon",
    imprimirNombre: function(){
        //console.log(nombre);
        //console.log("Nombre Completo");
        console.log(this.nombre + " "+ this.apellido);
    }
};

persona.nombre = "Andres";
persona.imprimirNombre();