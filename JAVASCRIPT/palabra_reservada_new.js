

function Persona(){
    this.nombre = "Carlos",
    this.apellido = "Mendoza",
    this.edad = 20;
    //console.log("Paso por aqui");

    this.imprimirPersona = function(){
        return this.nombre +" "+this.apellido + "("+this.edad+")";
    }

}

var juan = new Persona();

//console.log(juan);
//console.log(juan.nombre);
console.log(juan.imprimirPersona());

