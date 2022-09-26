export class People {

    constructor(nome: string, idade: number) {
        this.nome = nome;
        this.idade = idade;
    }

    nome: string; // Atributos
    idade: number;
}

const pe = new People('matheus', 18);
console.log(pe);