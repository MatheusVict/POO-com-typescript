"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Comprar = void 0;
class Comprar {
    constructor(cliente, carro, funcionario) {
        this.cliente = cliente;
        this.funcionario = funcionario;
        this.carro = carro;
        this.carro.setValor(this.darDesconto(this.carro.getValor()));
        this.precoFinal = this.carro.getValor();
        this.funcionario.setComi(this.addComissao(this.precoFinal));
        this.desconto = 0;
    }
    darDesconto(preco) {
        if (this.carro.getAno() < 2000) {
            this.desconto = this.carro.getValor() * 0.90;
            this.carro.setValor(this.desconto);
        }
        else {
            this.carro.setValor(preco);
        }
        if (this.cliente.getRenda() < 5000) {
            this.desconto = this.carro.getValor() * 0.90;
            return this.carro.setValor(this.desconto);
        }
        else {
            return this.carro.setValor(this.carro.getValor());
        }
    }
    addComissao(valor) {
        return this.funcionario.setComi(valor * 0.02);
    }
    detalhes() {
        console.log(`Cliente ${this.cliente.getNome()}comprou o Carro ${this.carro.getModelo()}\n
        Ano ${this.carro.getAno()} com o Valor ${this.carro.getValor()}\n
        Funcionario ${this.funcionario.nome} recebeu R$ ${this.funcionario.getComi()}\n
        `);
    }
}
exports.Comprar = Comprar;
