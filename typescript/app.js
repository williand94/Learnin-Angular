"use strict";
(() => {
    // Uso de Let y Const
    const nombre = "Ricardo Tapia";
    let edad = 23;
    const PERSONAJE = { nombre, edad };
    const batman = {
        nombre: "Bruno Díaz",
        artesMarciales: ["Karate", "Aikido", "Wing Chun", "Jiu-Jitsu"],
    };
    const validarBatman = (batman) => {
        if (batman.nombre === "Bruno Díaz") {
            return console.log(`Identidad de Batman: ${batman.nombre} Artesmarciales: ${batman.artesMarciales}`);
        }
    };
    validarBatman(batman);
    // Convertir esta funcion a una funcion de flecha
    function resultadoDoble(a, b) {
        return (a + b) * 2;
    }
    const sumar = (a, b) => {
        return (a + b) * 2;
    };
    console.log(sumar(5, 6));
    // Función con parametros obligatorios, opcionales y por defecto
    // donde NOMBRE = obligatorio
    //       PODER  = opcional
    //       ARMA   = por defecto = 'arco'
    function getAvenger1(nombre, poder, arma = "Arco") {
        var mensaje;
        if (poder) {
            mensaje = nombre + " tiene el poder de: " + poder + " y un arma: " + arma;
        }
        else {
            mensaje = nombre + " tiene un " + poder;
        }
    }
    const getAvenger = (nombre, poder, arma = "Arco") => {
        let mensaje;
        if (poder) {
            mensaje = `${nombre} tiene el poder de ${poder} y un ${arma}`;
        }
        else {
            mensaje = `${nombre} tiene un ${poder}`;
        }
        return mensaje;
    };
    console.log(getAvenger('Ojo de Alcón', 'Tirador'));
    // Cree una clase que permita manejar la siguiente estructura
    // La clase se debe de llamar rectangulo,
    // debe de tener dos propiedades:
    //   * base
    //   * altura
    // También un método que calcule el área  =  base * altura,
    // ese método debe de retornar un numero.
    class Rectangulo {
        constructor(base, altura) {
            this.base = base;
            this.altura = altura;
        }
        area() {
            return console.log(this.base * this.altura);
        }
    }
    const calculo = new Rectangulo(5, 7);
    calculo.area();
})();
