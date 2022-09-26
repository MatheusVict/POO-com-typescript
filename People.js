"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.People = void 0;
class People {
    constructor(nome, idade) {
        this.nome = nome;
        this.idade = idade;
    }
}
exports.People = People;
const pe = new People('matheus', 18);
console.log(pe);
