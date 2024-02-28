const PI = 3.14;
console.log(PI);
if(true){
    var mensagem = "safoda";
    console.log(mensagem);
}
console.log(mensagem)

let nome = "João";
let saudacao = 'Olá, '+nome+'1'
let saudacaoTemplate = `Olá, ${nome}!`

console.log(saudacao);
console.log(saudacaoTemplate);

let frutas = ["Maçã","Banana","Pera"];
for(let i = 0; i<frutas.length;i++){
    console.log(frutas[i])
}

for (i in frutas){
    console.log(frutas[i])
}

const soma = (a,b) => {
    c=a+b;
    c+7*b;
};
x = soma(1,2)
console.log(x)

function Pessoa(nome) {
    this.nome = nome;
    this.falar = function(){
        console.log(`Meu nome é ${this.nome}`)
    };
}
const joao = new Pessoa("João");
joao.falar();

(function () {
    var mensagem = "Olá, mundo!";
    console.log(mensagem)
})();

async function teste(){
    await fetch('https://google.com').then(response =>{
        console.log(response.status)
    })
    console.log("recebi os dados")
}
teste()

frutas.forEach(function(name,index){
    console.log(index,name);
})

const numeros = [1,2,3,4,5];

const quadrados = numeros.map(function(numero,index){
    return numero*index;
});
console.log(quadrados)

const numerosfiltrados = numeros.filter(function(numero){
    return numero > 3;
})
console.log(numerosfiltrados);
const numerosfiltrados2 = numeros.filter(numero => numero > 3);
console.log(numerosfiltrados2);

console.log(frutas.includes('maçã'));

const pessoa = {
    nome:"jao",
    idade:30,
    falar: function(){
        console.log(`eai me chamo ${this.nome}`)
    }
};

pessoa.falar()


const carro = new Object();
carro.marca = "Ford";
carro.modelo = "Mustang";
carro.ano = 1969;

const numeromaximo = Math.max(...numeros)
console.log(numeromaximo)

function verificarusuario(usuario,callback){
    const usuarios = ['a','b'];
    const usuarioexiste = usuarios.includes(usuario);
    if(usuarioexiste){
        callback(null,`${usuario} existe no sistema`);
    }
    else{
        callback("Usuario nao encontrado",null);
    }
}

verificarusuario('aa', (erro,mensagem) => {
    if(erro){
        console.error(erro);
    }
    else{
        console.log(mensagem);
    }
})