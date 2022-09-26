abstract class Gato {
    constructor(nome: string, cor: string) {
        this.nome = nome;
        this.cor = cor;
    }

    nome: string;
    cor: string;

    miar() {
        console.log('MIAUUUUUUU');
    }
};

export class Tu extends Gato{

    constructor(nome: string, cor: string, idade: number) {
        super(nome, cor);
        this.idade = idade;
    }

    idade: number;

    public miado() {
        return this.miar();
    }
};

const tu = new Tu('Tú', 'tricolor', 5);

tu.miado();