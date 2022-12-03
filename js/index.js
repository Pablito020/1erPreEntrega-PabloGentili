
//Este es el Codigo de las condicionales.
let nombre = prompt("Ingrese su Nombre:");
const edad = parseFloat(prompt("Ingrese su edad!"));


const usuario = (valor) => {

    if (nombre == "Pablo") {
        alert("Bienvenido " + nombre);
    }
    else {
        alert("Sos Mayor?");
    }

    if (valor >= 18){
       return true;
    }
    else {
     alert("Sos menor, no podes entrar!");
       return false;
   }
   

}

const persona = {name:nombre, edad:usuario(edad)};
console.log(persona);


// Este será el Codigo de Negocio.

const max_suma_productos = 100000;
const max_productos = 5;
const descuento = 25;
const iva = 21;

let suma_productos = 0;
let total_productos = 0;
let nombre_producto = prompt("Ingrese el Nombre del Producto:");
let valor_producto = parseFloat(prompt("Ingrese el Valor del Producto:"));

while ((nombre_producto != "ESC") && (nombre_producto != null)) {
    suma_productos = suma_productos + valor_producto;
    console.log("Suma Productos: " + suma_productos);   

    total_productos++;
    console.log("Total Productos: " + total_productos);
    nombre_producto = prompt("Ingrese el Nombre del Producto: (ESC para salir)").toUpperCase();
    valor_producto = parseFloat(prompt("Ingrese el Valor del Producto:"));

    if (valor_producto == null) {
        valor_producto = 0;
    }


suma_productos = suma_productos + ((suma_productos * iva)/100);
console.log("c/IVA: " + suma_productos);

if ((suma_productos >= max_suma_productos) || (total_productos >= max_productos)) {
    suma_productos = suma_productos - ((suma_productos * descuento) / 100);
    console.log("c/Descuento: " + suma_productos);
}

alert("La Suma Total de Productos es: $" + suma_productos.toFixed(2) + " Pesos!");
}
