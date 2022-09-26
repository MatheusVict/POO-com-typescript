"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Carro = void 0;
class Carro {
    constructor(modelo, ano, valor) {
        this.modelo = modelo;
        this.ano = ano;
        this.valor = valor;
    }
    getModelo() {
        return this.modelo;
    }
    getAno() {
        return this.ano;
    }
    getValor() {
        return this.valor;
    }
    setModelo(modelo) {
        this.modelo = modelo;
    }
    setAno(ano) {
        this.ano = ano;
    }
    setValor(valor) {
        return this.valor = valor;
    }
}
exports.Carro = Carro;
