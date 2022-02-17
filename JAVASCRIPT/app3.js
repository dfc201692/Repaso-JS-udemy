

function Persona(){
    this.nombre = "fernado";
    this.apellido = "lozano";
    this.edad = 30;
    this.pais = "Costa Rica";

    this.imprimirInfo = function(){
        console.log(this.nombre + " " +this.apellido + "("+this.edad+")");
    }    
}

Persona.prototype.pais = "Costa Rica";


var fer = new Persona();
//fer.imprimirInfo();
console.log(fer)


Number.prototype.esPositivo = function(){
    if(this > 0 ){
return true
    }else{
return false
    }
}