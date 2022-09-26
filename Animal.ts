export class Animal {
    constructor(nome: string, espe: string, idade: number) {
        this.nome = nome;
        this.especie = espe;
        this.idade = idade;
    }

    nome: string;
    especie: string;
    idade: number;

    protected falar(name: string): void {
        console.log(`Olá ${name}`)
    }
}

class Gato extends Animal {
    raça: string;

    constructor(nome: string, espe: string, idade: number, raça: string) {
        super(nome, espe, idade);
        this.raça = raça;
    }

    public miar(name: string) {
        super.falar(name)
    }
}

class Pessoa extends Animal {
    cor: string;

    constructor(nome: string, espe: string, idade: number, cor: string) {
        super(nome, espe, idade);
        this.cor = cor;
    }
}


const gat = new Gato('Tú', 'tricolor', 5, 'tricolor');
const pess = new Pessoa('Matheus', 'homo-sapiens', 18, 'pardo');
const ani = new Animal('Caipora', 'caninus', 2);

gat.miar('matheus');

console.log(gat);
console.log(pess);
console.log(ani);

