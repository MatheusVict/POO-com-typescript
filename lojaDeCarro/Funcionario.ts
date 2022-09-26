export class Funcionario {
    constructor(nome: string) {
        this.nome = nome;
    }
    
    nome: string;
    comissao = 0;

    public getNome() {
        return this.nome;
    }

    public setNome(nome: string): string{
        return this.nome = nome;
    }

    public getComi() {
        return this.comissao;
    }

    public setComi(comissao: number): number {
        return this.comissao = comissao;
    }
}