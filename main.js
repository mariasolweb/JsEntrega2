 

class Producto {
    constructor (nombre, modelo,precio){
        this.nombre = nombre;
        this.modelo = modelo;
        this.precio = precio;
        
    }
}

const cochecito = new Producto ("Cochecito", "Genova", 89000);
const sillita = new Producto ("Sillita", "Berlin", 75000);
const Butaca = new Producto ("Butaca", "Neo", 65000);



const arrayProductos = [cochecito, sillita, Butaca];

function menu(){
    alert("Bienvenido a Mundo Bebe");
    let option = parseInt(prompt("Ingrese una opcion: \n1) Ingreso de productos \n2) Modificacion del producto \n3) Consulta de productos \n4) Ordenar productos por precio \n5)Salir"));
    return option;
}

//Funcion para Ingresar productos:

function ingresoProducto () {
    let nombre = prompt("Ingrese el nombre del producto: ");
    let modelo = prompt("Ingrese el modelo del producto ingresado: "); 
    let precio = parseInt(prompt("Ingrese el precio del producto: $"));
    let producto = new Producto (nombre, modelo, precio);
    arrayProductos.push(producto);
    console.log(arrayProductos);
}

//Funcion para Modicificar el producto:

function modificoProducto() {
    let precio = parseInt(prompt("ingrese el Precio del producto: $"));
    let producto = arrayProductos.find(producto => producto.precio === precio);
    let indice = arrayProductos.indexOf(producto); 

    let nombre = prompt("Ingrese el nombre del producto: ");
    let modelo = prompt("Ingrese el modelo del producto: ");
    let productoModificado = new Producto(nombre, modelo, precio);

    arrayProductos.splice(indice, 1, productoModificado);
    console.log(arrayProductos);

}

//Funcion Consulta de productos:

function consultaProducto() {
    let nombre = prompt("Ingrese el nombre del producto: ");
    let producto = arrayProductos.find(producto =>producto.nombre === nombre);
    console.log(producto);
}

//Funcion para ordenar los productos por precio:

function ordenarPrecio() {
let producto = arrayProductos.sort((a,b) => a.precio - b.precio);
console.log(producto);
}

function salir() {
    alert("Gracias por viistarnos");
}

let option = menu();

switch(option) {

    case 1:
        ingresoProducto();
        break;

    case 2:
        modificoProducto();
        break;

    case 3:
        consultaProducto();

    case 4:
        ordenarPrecio();
        break;

    case 5: 
        salir();
        break;
    default:
        alert("Por favor ingrese una opcion valida.");
        break;
}



































