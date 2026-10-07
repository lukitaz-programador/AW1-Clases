// console.log('Hola JS') //-imprime por consola

//tipado
//tipo + name var + valor 
//const nombre = 'Lucas'
//nombre = 'Pedro'

// let nombre = 'Jose'
// nombre = 'Lucas'
// // nombre = 1

// console.log(typeof nombre)

// let esMayorEdad = true

//Operadores
//Aritmeticos 

const edad = 15
const mayoriaEdad = 18

const aumentoEdad = edad+1

// if (edad > mayoriaEdad){
//     esMayorEdad=true
// }
// else {
//     esMayorEdad=false
// }

// console.log(aumentoEdad)

//Logicos 

let esMayorEdad = mayoriaEdad <= edad

console.log(esMayorEdad)

if(mayoriaEdad <= edad){
    console.log('Es mayor.')
}
else if(edad === mayoriaEdad){
    console.log('Tiene 18.')
}
else{
    console.log('Es menor.')    
}