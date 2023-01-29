//Definimos la funcion HelloWorld
function HelloWorld (){
    console.log("HelloWorld!")
}
//invocamos la function HelloWorld
HelloWorld ();

//setTimeout - ejecuta una función DESPUES de cierto tiempo
function saludo(nombre) {
    console.log('Hola ${nombre}, buenos dias');
}

let temporizadorID = setTimeout(saludo, 2000, 'Mauro');

clearTimeout(temporizadorID);

//setInterval - ejecuta una función CADA cierto tiempo

let numero = 0;

let incrementoID = setTimeout(function incremento(){
    console.log(numero);
    numero++;
    incrementoID = setTimeout(incremento, 1000);
}, 1000);



