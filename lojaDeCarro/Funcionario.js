"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Funcionario = void 0;
class Funcionario {
    constructor(nome) {
        this.comissao = 0;
        this.nome = nome;
    }
    getNome() {
        return this.nome;
    }
    setNome(nome) {
        return this.nome = nome;
    }
    getComi() {
        return this.comissao;
    }
    setComi(comissao) {
        return this.comissao = comissao;
    }
}
exports.Funcionario = Funcionario;
