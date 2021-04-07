
// uso de for para repetir

// let i = 1;  valor inicial
//  i < 10; até quando esse i que tinha valor de 0 vai ir até, que nesse caso é 9
//  i++;  incrementador abreviado, seria o mesmo que dizer i = i + 1;

for (var i = 1; i < 10; i++) {
    console.log(i);
}

// uso de um for para percorrrer um array
//            indice0   indice1     indice2
const array = [ "Oie", "Tudo Bem?", "Como vai?"]; 
 // tamanho 3, mas indice 2, pois em javascript se conta do 0, ou seja, 0,1,2

// let i = 0;  valor inicial
//  i <= 2; até quando esse i que tinha valor de 0 vai ir até, que nesse caso é 2
//  i++;  incrementador abreviado, seria o mesmo que dizer i = i + 1;

 for (var i = 0; i <= 2; i++) {
    console.log("valor de i      " + i);
    console.log("valor de array[i]       " + array[i]);
 }



console.log('\r\r\r'); // organizando o console


 // de uma maneira mais inteligente


// o metodo length mostra o tamanho total do array, que no caso, são 3 elementos
console.log('tamanho do array: ' + array.length + "\r\r\r");

 for (var i = 0; i < array.length; i++) {
    console.log("valor de i      " + i);
    console.log("valor de array[i]       " + array[i]);
 }

 // o metodo mais eficiente para percorrer um array
 // for of - exemplo no arquivo for_of.js 

 // porque é mais eficiente?    
 // enquanto no for in e for var para recuperamos o valor precisamos especificar assim array[i]
 // com o for of, o i é o proprio valor
  
