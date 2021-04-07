const array = [ "Oie", "Tudo Bem?", "Como vai?"];
const objeto = { msg : 'Vamos Conseguir', turma : "reprograma11"}
console.log('Arrays \n');


for (var i in array) {
    console.log("valor de i      " + i);
    console.log("valor de array[i]       " + array[i]);
}


console.log('\r\r\r Objetos \n');
for (var i in objeto) {
    console.log('valor de i      ' +i)
    console.log("valor de objeto[i]      " + objeto[i])
}

// documentacao: https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Statements/for...in
// pressione o ctrl sobre o link


// Curiosidades 
// Eu posso usar for dentro de for  - Sim!
// Eu posso usar for dentro de for dentro de outro for - Sim!