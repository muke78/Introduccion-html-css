var global = 0;
var buenosDias = function () {
    alert("Buenos dias")
    var saludosDos = function () {
        var uno;
        var dos;
        var tres;
        alert("Mensaje Dos");
        global;
    }
};

var buenosNoches = function () {
    alert("Buenos noches");
};
function saludar(saludos) {
    saludos();
};

saludar(buenosDias);
saludar(buenosNoches);

let nom = "Daniel Aguirre<br>";
document.write(nom);

document.write("10+8*3<br>");
document.write(10 + 8 * 3);

function saludar(nombre) {
    alert("Buenas tardes" + nombre);
    return 0;
};

var c = 0;

var sumar = function (a, b) {
    let c = a + b;
    let res;
    return c;
};

var mul = function (a, b) {
    let c = a * b;
    return c;
};

var suma = sumar(5, 10);
var multi = mul(5, 10);

document.write("<h1>El resultado de c es: " + c + "</h1>");
document.write("<h1> La suma es: " + suma + "</h1>");
document.write("<h1> La multiplicacion es: " + multi + "</h1>");

var ope = function (unaFuncion) {
    var resu = unaFuncion(3, 4);
    alert("El resultado es: " + resu)
};

ope(sumar);
ope(mul)