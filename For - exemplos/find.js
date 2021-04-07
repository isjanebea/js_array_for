// o metodo find recupera o primeiro elemento que ele encontrar
// ex i.turma=="Reprograma" seria o mesmo que if (i.turma==reprograma) { return i }

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
]

let resultado = array.find(function(i) {
    return i.turma == 'Reprograma';  // caso exista dentro da propriedade turma o valor reprograma retorna esse objeto
});



console.log(resultado);


// documentacao : https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Array/find