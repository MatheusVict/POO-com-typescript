"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Client = void 0;
class Client {
    constructor(nome, renda) {
        this.nome = nome;
        this.renda = renda;
    }
    getNome() {
        return this.nome;
    }
    setNome(nome) {
        this.nome = nome;
    }
    getRenda() {
        return this.renda;
    }
    setRenda(renda) {
        return this.renda = renda;
    }
}
exports.Client = Client;
