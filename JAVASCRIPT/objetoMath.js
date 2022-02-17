
var PI = Math.PI;
var E = Math.E;


console.log(PI);

console.log(E);

var num1 = 10.456789
console.log(num1);
console.log(Math.round(num1,2));

//Random por debajo de 1. aleatorio
var rnd = Math.random();
console.log(rnd);


//random entre numeros.
function randomEntre(min, max){
    return Math.floor(Math.random()*(max-min+1)+min);
}

console.log(randomEntre(100,6000));


console.log(Math.sqrt(10));


console.log(Math.pow(5, 3));


