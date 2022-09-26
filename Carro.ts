export class Carro {
    constructor(cor: string, ano: number, valor: number) {
        this.cor = cor;
        this.ano = ano;
        this.valor = valor;
    }

    private cor: string;
    private ano: number;
    private valor: number;

    private getter() { // privado, ou seja, só posso utilizar dentro da classe
        return this.valor;
    }

    public setter(valor: number) {
        this.valor = valor;
    }
    
    public get() {
        console.log(`${this.getter()}`)
    }
}

const carro = new Carro('Azul', 1998, 25.000);
carro.setter(50.000);
carro.get()