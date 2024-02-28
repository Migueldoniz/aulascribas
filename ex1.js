//crie uma função que receba um array de objetos representando pessoas (cada pessoa tem um nome e idade) e retorne um novo array com os nomes das pessoas que tem 18 anos ou maias
const pessoa1 = {
    name: 'a',
    idade: 1
};
const pessoa2 = {
    name: 'Joao',
    idade: 30
};
const pessoa3 = {
    name: 'Joao',
    idade: 30
};

const pessoas = [pessoa1,pessoa2,pessoa3];


pessoasmaior18 = pessoas.filter(pessoa => pessoa.idade>18)
console.log(pessoasmaior18)