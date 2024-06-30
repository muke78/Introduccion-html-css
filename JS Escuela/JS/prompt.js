var persona = new Object;
    persona.nombre = prompt("nombre");
    persona.apellidoPaterno = prompt("Apellido Paterno");
    persona.apellidoMaterno = prompt("Apellido Materno");
    persona.edad = prompt("Edad");
    var nombres = "";
    var edad = 14;

    document.write("<h1> Nombre: " + nombre + " Paterno: " + apellidoPaterno + " Materno: " + apellidoMaterno + " Edad: " + edad + "</h1>");
    alert("El nombre es: " + persona.nombre + " " + "Paterno: " + persona.apellidoPaterno + " " + "Materno: " + persona.apellidoMaterno + " " + "Edad: " + persona.edad);

    function suma() {
        var suma = new Object;
        var a, b, resu;
        a = suma.num1 = prompt("Numero 1");
        b = suma.nums1 = prompt("Numero 2");
        resu = parseInt(a) + parseInt(b);
        document.write("<h1> La suma es: " + resu + "</h1>");
    };