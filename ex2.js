function Livro(nome, author, ano){
    this.nome=nome;
    this.author=author;
    this.ano=ano;
}

function biblioteca(){
    this.livros=[]
    this.addlivro= function(nome, author, ano){
        this.livros.push(new Livro(nome,author,ano))
    }
    this.getall=function (){
        for (i in this.livros){
            j=Number(i)+1
            console.log(`Livro ${j}:\n${this.livros[i].nome} por ${this.livros[i].author}, ${this.livros[i].ano}\n`)
        }
    }
    this.buscar=function (nome){
        let has = this.livros.filter(L => L.nome==nome)
        console.log(has)
        if(has.length>0){
            console.log("sim, tem")
        }
        else{
            console.log(`Não tem ${nome}`)
        }
    }
}

biblio = new biblioteca();
biblio.addlivro("Assassinato no Expresso do Oriente","Ágatha Christie","1900")
biblio.addlivro("Xuxa para baixinhos","Xuxa","1950")
biblio.buscar("A")
biblio.buscar("Assassinato no Expresso do Oriente")
biblio.getall()