


function evento(arg){
    console.log("Me disparé");
    console.log(arg);
}


var objeto = document.getElementById("objDemo");
objeto.addEventListener("click",evento);