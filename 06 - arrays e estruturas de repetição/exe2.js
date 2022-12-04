// 2) crie um program que seja capaz de percorrer uma lista de numeros e imprima cada numero para encontrado


const numeros = [7, 12, 15, 24, 48];

for (let i = 0; i < numeros.length; i++) {
    const numero = numeros[i];

    if (numero % 2 === 0){
        console.log(numero); 
    }
      
}