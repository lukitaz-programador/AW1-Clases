// // // console.log('Hola JS') //-imprime por consola

// // //tipado
// // //tipo + name var + valor 
// // //const nombre = 'Lucas'
// // //nombre = 'Pedro'

// // // let nombre = 'Jose'
// // // nombre = 'Lucas'
// // // // nombre = 1

// // // console.log(typeof nombre)

// // // let esMayorEdad = true

// // //Operadores
// // //Aritmeticos 

// // const edad = 15
// // const mayoriaEdad = 18

// // const aumentoEdad = edad + 1

// // // if (edad > mayoriaEdad){
// // //     esMayorEdad=true
// // // }
// // // else {
// // //     esMayorEdad=false
// // // }

// // // console.log(aumentoEdad)

// // //Logicos 

// // let esMayorEdad = mayoriaEdad <= edad

// // console.log(esMayorEdad)

// // if (mayoriaEdad <= edad) {
// //     console.log('Es mayor.')
// // }
// // else if (edad === mayoriaEdad) {
// //     console.log('Tiene 18.')
// // }
// // else {
// //     console.log('Es menor.')
// // }



// // //Clase 16
// // //Estructura de control de bucle 

// // for (let i = 0; i < 10; i++) {
// //     console.log(i)
// // }

// // // //Funciones

// // // //Declaracion

// // // function sumar(a, b) {
// // //     return a + b
// // // }

// // // //Invocar/ejecutar

// // // const resultado = sumar(10, 2)

// // // console.log(resultado)

// // //Flecha --> Anónima

// // const resta = (a, b) => {
// //     return a - b
// // }

// // const resta = a => a + 5

// //Callback 

// const a = (cb)=>{
//     console.log('Se ejecutó a')
//     cb()
// }

// // Nuestro callback
// const b = ()=>{
//     console.log('Se ejecutó el callback b')
// }
// // console.log(b())
// // a(b)

// a(()=>{
//     console.log('Se ejecutó el callback b')
// })

//Metodos array

const numeros = [2, 8, 12, 50]

//ForEach --> loop --> no devuelve nada 
//El callback se ejecuta una vez por elemento 
numeros.forEach((numero, indice, arreglo)=>{
    console.log(numero, indice, arreglo)
})