export class Carro {
    constructor(modelo: string, ano: number, valor: number) {
        this.modelo = modelo;
        this.ano = ano;
        this.valor = valor
    }

    modelo: string;
    ano:number;
    valor: number;

    public getModelo() {
        return this.modelo;
    }

    public getAno() {
        return this.ano;
    }

    public getValor(): number{
        return this.valor;
    }

    public setModelo(modelo: string) {
        this.modelo = modelo;
    }

    public setAno(ano: number) {
        this.ano = ano;
    }

    public setValor(valor: number): number {
        return this.valor = valor;
    }
}