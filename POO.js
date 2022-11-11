/*
Programacion orientada a objetos (POO)

Paradigma  = Manera en la que se puede hacer algo especifico

paradigma de programacion = Forma o manera en la que puedo programar algo

POO en JAVA, en JS, C#
Otras formas de programar
Programacion funcional
Programacion imperativa
Programacion declarativa


Pilares fundamentales de la programacion POO
    -Polimorfismo
    -Herencia
    -Encapsulamiento(datos que no muestras por seguridad)
    -Abstraccion 


-Clases
-Objetos
    -Atributos (lo que tengo- ojitos pispiretos)
    -Metodos (lo que puedo hacer con lo que tengo - mirar lo bello de la vida)





*/

//propiedades = variables o constantes
const color = "gris";
var tamaño = "chiquito";
var edad = 5;
var cicatrices =  true;
const raza = "angora";
var caracter = "agresivo";

//Metodos o funciones
function comer(){}
function treparArboles(){}
function maullar(){}
function grunir(){}
function dormir(){}
function corretearPerros(){}

//Precursor de los objetos Array
var gatito = ['Cilantro', 'Agresivo', 5, 'Angora', true, 'Chiquito'];
console.log(typeof(gatito));


//Evolucion de los arreglos
var Cilantro = {
    nombre: "Cilantro",
    edad: 5,
    caracter : "Agresivo",
    raza : "Angora",
}

var Perejil= {
    nombre: "Perejil",
    edad: 10,
    caracter : "Feliz",
    raza : "Siames",
}

var Cebollita= {
    nombre: "Cebollita",
    edad: 1,
    caracter : "Timida",
    raza : "Esfinge",
}

var Limon= {
    nombre: "Limon",
    edad: 2,
    caracter : "Agrio",
    raza : "Egipcio",
}


console.log(typeof(Cilantro));
console.log("El nombre de Cilantro es", Cilantro.nombre);
console.log("El caracter de Cilantro es",Cilantro.caracter);

/*

Clases para agilizar este proceso (plantillas)


*/
//1.Defino mi clase con la palabra reservada class

class gato{
    //2.Definir mis propiedades o atributos como variables,para despues ponerle valores
    nombre ="";
    edad = 0;
    raza= "";
    caracter= "";

    //4.-Agregar constructores
    //necesito construccion con los atributos que ya defini en la clase

    constructor (nombre, edad, raza, caracter){
        //funcion especial para construir donde necesito estos parametros
        this.nombre = nombre;
        this.edad = edad;
        this.raza = raza;
        this.caracter= caracter;
    }

    //3.Definir los metodos que seran definidos como funcioneso acciones
    maullar(){
        console.log("miau");
    }
    dormir(){
        console.log("zzzzz");
    }
    ronronear(){
    console.log("grrrrr");
    }

    
}

//para empezar a crear o instanciar objetos (gatos), vamos a utilizar la palabra reservada new

var Gardfield = new gato("Gardfield",9,"naranja","dormilon");
var Felix = new gato("Felix",3,"negro","alegre");
var DonGato = new gato("DonGato",6, "amarillo", "astuto");
var Kitty = new gato("Kitty",3,"blanca","tranquila");
var Coco = new gato("Coco",0.5,"negro","juguetona");
var Cucho= new gato("Cucho",5,"cafe", "distraido");


console.log(Gardfield);
Gardfield.ronronear();
Gardfield.dormir();
Gardfield.maullar();

console.log(Felix);
Felix.ronronear();
Felix.dormir();
Felix.maullar();

console.log(DonGato);
DonGato.ronronear();
DonGato.dormir();
DonGato.maullar();

console.log(Kitty);
Kitty.ronronear();
Kitty.dormir();
Kitty.maullar();

console.log(Coco);
Coco.ronronear();
Coco.dormir();
Coco.maullar();

console.log(Cucho);
Cucho.ronronear();
Cucho.dormir();
Cucho.maullar();

/*
JSON (JavaScript Object Notation)

Es un formato estandar (que ya existe, alguien lo definio y tiene ciertas reglas) que esta basado en texto y nos sirve para representar datos estructurados basados en la sintaxis de JS


*/
var Cebollita= {
    nombre: "Cebollita",
    edad: 1,
    caracter : "Timida",
    raza : "Esfinge",
}

console.log(Cebollita);
console.log(typeof(Cebollita));

//objeto  JSON

var CebollitaJSON= {
    "nombre": "Cebollita",
    "edad": 1,
    "caracter" : "Timida",
    "raza" : "Esfinge",
}

console.log(CebollitaJSON);
console.log(typeof(CebollitaJSON));

const objetoDeserealizado = {
    "nombre": "Cebollita",
    "edad": 5,

}
//objeto de Js
var Perejil= {
    nombre: "Perejil",
    edad: 10,
    caracter : "Feliz",
    raza : "Siames",
}

//JSON.stringify (objeto a string para que el servidor lo lea)
const perejilSerializado = JSON.stringify(Perejil);

//JSON.parse (string a un objeto JSON)

const PerejilDeserealizado = JSON.parse(perejilSerializado);
console.log("este es perejil como objeto", PerejilDeserealizado);
console.log("este es perejil como cadena",perejilSerializado);