const array = [ "Oie", "Tudo Bem?", "Como vai?"];
const objeto = { msg : 'Vamos Conseguir', turma : "reprograma11"}

for (var i of array) {
    console.log("valor de i      " + i);
    console.log("valor de array[i]       " + array[i]);
}


console.log('\r\r\r Objetos \n');
// for of não funciona em objetos

// documentacao: https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Statements/for...of
// pressione o ctrl sobre o link


// Curiosidades 
// Eu posso usar for dentro de for  - Sim!
// Eu posso usar for dentro de for dentro de outro for - Sim!