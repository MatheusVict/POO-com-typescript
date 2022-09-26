"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Carro = void 0;
class Carro {
    constructor(cor, ano, valor) {
        this.cor = cor;
        this.ano = ano;
        this.valor = valor;
    }
    getter() {
        return this.valor;
    }
    setter(valor) {
        this.valor = valor;
    }
    get() {
        console.log(`${this.getter()}`);
    }
}
exports.Carro = Carro;
const carro = new Carro('Azul', 1998, 25.000);
carro.setter(50.000);
carro.get();
