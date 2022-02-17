

function identifica(param){
    console.log(typeof param);
    console.log(param instanceof Persona);

}



function Persona(){
    this.nombre  = "David";
    this.edad = 30;
}


var juan  =  new Persona();


//identifica(1);
identifica(juan);
//identifica({});


