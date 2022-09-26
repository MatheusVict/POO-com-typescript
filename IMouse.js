"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Mouse = void 0;
class Mouse {
    constructor(nome, idade) {
        this.nome = nome;
        this.idade = idade;
    }
    correr() {
        console.log('fugii');
    }
}
exports.Mouse = Mouse;
const mouse = new Mouse('rato', 'seis');
mouse.correr();
console.log(mouse.nome, mouse.idade);
