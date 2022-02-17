
function crearCookie (nombre, valor){
    valor = escape(valor);
    valor = unescape(valor);

    document.cookie = nombre +"="+valor+";";
}

//document.cookie =  "nombre=fernando";

 crearCookie("nombre","Fernando")



var cookies = document.cookie;

console.log(cookies);

