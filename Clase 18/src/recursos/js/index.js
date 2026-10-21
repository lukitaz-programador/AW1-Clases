const numerosB = [];

for (let i = 1; i <= 5; i++){
    let numeroB = Number(prompt("Ingrese un numero"));
    if(numeroB % 2 != 0){
        numerosB.push(numeroB);
    }
}
console.log(numerosB);