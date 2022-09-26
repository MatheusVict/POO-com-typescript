"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Animal = void 0;
class Animal {
    constructor(nome, espe, idade) {
        this.nome = nome;
        this.especie = espe;
        this.idade = idade;
    }
    falar(name) {
        console.log(`Olá ${name}`);
    }
}
exports.Animal = Animal;
class Gato extends Animal {
    constructor(nome, espe, idade, raça) {
        super(nome, espe, idade);
        this.raça = raça;
    }
    miar(name) {
        super.falar(name);
    }
}
class Pessoa extends Animal {
    constructor(nome, espe, idade, cor) {
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
