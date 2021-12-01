"use strict";

//Ejercicio 1
const suma = (a, b) => {
    return console.log(`La suma es ${a + b}`);
}
suma(4, 5);

const resta = (a, b) => {
    return console.log(`La resta es ${a - b}`);
}
resta(4, 5);

const multiplicacion = (a, b) => {
    return console.log(`La multiplicacion es ${a * b}`);
}
multiplicacion(4, 5);

const division = (a, b) => {
    return console.log(`La division es ${a / b}`);
}
division(4, 5);

//Ejercicio 2

const areaTriangulo = (base, altura) => {
    const area = (base * altura) / 2;
    return console.log("El area del triangulo es: " + area);;
}

areaTriangulo(5, 3);

//Ejercicio 3

const perimetroRectangulo = (base, altura) => {
    const perimetro = (base * 2) + (altura * 2);
    return console.log("El perimetro del rectangulo es: " + perimetro);
}

perimetroRectangulo(3, 2);

//Ejercicio 4

const arrEmpleados = [
    {
        nombre: "Mercedes",
        sueldo: 2000,
    },
    {
        nombre: "Maria Luz",
        sueldo: 1800,
    },
    {
        nombre: "Javier",
        sueldo: 1500,
    },
    {
        nombre: "Elena",
        sueldo: 1500,
    },
    {
        nombre: "Patricia",
        sueldo: 1200,
    }
]

const empleados = (array) => {
    for (const empleado of array) {
        const sueldoMayor = Math.max(empleado.sueldo);
        if (sueldoMayor === empleado.sueldo) {
            return empleado.nombre;
        }
    }
}
console.log(empleados(arrEmpleados));

//Ejercicio 5

const presupuesto = (pres) => {
    const pediatria = 42 * pres / 100;
    console.log(`Pediatria recibe: ${pediatria}`);
    const urgencias = 37 * pres / 100;
    console.log(`urgencias recibe: ${urgencias}`);
    const traumatologia = 21 * pres / 100;
    console.log(`traumatologia recibe: ${traumatologia}`);
};

presupuesto(50000);

//Ejercicio 6

const sueldoHora = 10;

const sueldoFinal = (horas) => {
    if (horas <= 40) {
        return horas * sueldoHora;
    } else if (horas > 40 && horas <= 48) {
        let horasExtra = horas - 40;
        horasExtra *= sueldoHora * 2;
        return (40 * sueldoHora) + horasExtra;
    } else if (horas > 48) {
        let horasSuperExtras = horas - 48;
        horasSuperExtras *= sueldoHora * 3;
        let horasExtra = sueldoHora * 2 * 8;
        return (40 * sueldoHora) + horasExtra + horasSuperExtras;
    }
}
console.log(`El sueldo del trabajador es: ${sueldoFinal(40)}`);

//Ejercicio 7
const diaNavidad = "25";
const mesNavidad = "diciembre";
const preguntar = document.getElementById("btn");

const esNavidad = () => {

    const diaEl = document.getElementById("dia").value;
    const mesEl = document.getElementById("mes").value;

    if (diaEl === diaNavidad && mesEl === mesNavidad) {
        console.log("Feliz Navidad");
    } else {
        console.log("Aun no es Navidad");
    }
}

preguntar.onclick = esNavidad;

//Ejercicio 8

const mujeres = 7;
const hombres = 6;

const porcentajes = (mujeres, hombres) => {
    const total = mujeres + hombres;
    const porcentajeMujeres = mujeres * 100 / total;
    const porcentajeHombres = hombres * 100 / total;
    const resultado = `El porcentaje de mujeres es ${porcentajeMujeres} y el de hombres ${porcentajeHombres}`;
    return resultado
}
console.log(porcentajes(mujeres, hombres));
