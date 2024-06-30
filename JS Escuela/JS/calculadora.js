var c = 0;

var sumar = function (a, b) {
    let c = a + b;
    return c;
};

var restar = function (a, b) {
    let c = a - b;
    return c;
};

var multiplicar = function (a, b) {
    let c = a * b;
    return c;
};

var dividir = function (a, b) {
    let c = a / b;
    return c;
};

var operacion = function (ope) {
    let resu = ope(60, 4);
    document.write("<h1>El resultado es: " + resu + "</h1>")
};
document.write("<h1>El resultado de la suma es: </h1>");
operacion(sumar);
document.write("<h1>El resultado de la resta es: </h1>");
operacion(restar);
document.write("<h1>El resultado de la multiplicacion es: </h1>");
operacion(multiplicar);
document.write("<h1>El resultado de la division es: </h1>");
operacion(dividir);

