export class Client {
    constructor(nome: string, renda: number) {
        this.nome = nome;
        this.renda = renda;
    }

    nome: string;
    renda:  number;

    public getNome() {
        return this.nome;
    }

    public setNome(nome: string) {
        this.nome = nome;
    }

    public getRenda() {
        return this.renda;
    }

    public setRenda(renda: number): number {
        return this.renda = renda
    }
}

