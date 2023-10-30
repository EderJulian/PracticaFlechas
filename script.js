// Convierte la siguiente función en una función flecha:

function saludar() {
  return "Hola";
}

const saludar = () => "Hola";


// Convierte la siguiente función en una función flecha en línea:

function division(a,b) {
  return a / b;
}

const division = (a, b) => a / b;



// Convierte la siguiente función en una función flecha:

function miNombre(nombre) {
  return `Mi nombre es ${nombre}`;
}

const miNombre = (nombre) => `Mi nombre es ${nombre}`;


// Convierte las siguientes funciones en funciones flecha:

function test2() {
  console.log("Función test 2 ejecutada.");
}
function test1(callback) {
  callback();
}	

const test2 = () => {
    console.log("Función test 2 ejecutada.");
  };
  
  const test1 = (callback) => {
    callback();
  };






//   Utiliza la siguiente array para resolver los próximos ejercicios: 
      
let gente = [
        {
          nombre: "Jamiro",
          edad: 45,
        },
        {
          nombre: "Juan",
          edad: 35,
        },
        {
          nombre: "Paco",
          edad: 34,
        },
        {
          nombre: "Pepe",
          edad: 14,
        },
        {
          nombre: "Pilar",
          edad: 24,
        },
        {
          nombre: "Laura",
          edad: 24,
        },
        {
          nombre: "Jenny",
          edad: 10,
        },
      ];

const genteMayorDe25 = gente.filter(persona => persona.edad > 25);
console.log(genteMayorDe25);

const genteQueEmpiezaPorJ = gente.filter(persona => persona.nombre[0] === 'J');
console.log(genteQueEmpiezaPorJ);

    


const numbers = [4, 5, 6, 7, 8, 9, 10];

const numbersToThemselves = numbers.map(num => Math.pow(num, num));
console.log(numbersToThemselves);



const numbersimpares = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const impares = numbersimpares.filter(numero => numero % 2 !== 0);

console.log(impares);




const foodList = [
    { name: 'Tempeh', isVeggie: true },
    { name: 'Cheesbacon burguer', isVeggie: false },
    { name: 'Tofu burguer', isVeggie: true },
    { name: 'Entrecot', isVeggie: false }
  ];
  
  const platosVeganos = foodList.filter(plato => plato.isVeggie);
  
  const sentencias = platosVeganos.map(plato => `El plato ${plato.name} es vegano.`);
  
  console.log(sentencias);


  const numeros = [39, 2, 4, 25, 62];

  const multiplicacion = numeros.reduce((acumulador, numero) => acumulador * numero, 1);
  
  console.log(multiplicacion);
