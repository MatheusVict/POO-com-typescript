"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Tu = void 0;
class Gato {
    constructor(nome, cor) {
        this.nome = nome;
        this.cor = cor;
    }
    miar() {
        console.log('MIAUUUUUUU');
    }
}
;
class Tu extends Gato {
    constructor(nome, cor, idade) {
        super(nome, cor);
        this.idade = idade;
    }
    miado() {
        return this.miar();
    }
}
exports.Tu = Tu;
;
const tu = new Tu('Tú', 'tricolor', 5);
tu.miado();
