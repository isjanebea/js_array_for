const array = [
    {
        'turma' : 'Reprograma', 'ano' : 2020
    },
    {
        'turma' : 'Reprograma', 'ano' : 2019
    },
    {
        'turma' : 'Reprograma', 'ano' : 2018
    },
    {
        'turma' : 'EnsinoMedio', 'ano' : 2015
    },
]
// o metodo filter, filtra todos os elementos que atenderem a mesma condicao
// ex: i.turma=='Reprograma'    seria o mesmo que if (i.turma=='reprograma') { return i }

let resultado = array.filter(function(i) {
    return i.turma == 'Reprograma';  // caso exista dentro da propriedade turma o valor reprograma retorna esse objeto
});

console.log(resultado);


// documentacao : https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Array/filter