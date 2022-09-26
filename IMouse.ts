interface IMouse {
    nome: string;
    idade: number | string;
    correr(): void;
}

export class Mouse implements IMouse {
    constructor(nome: string, idade: number | string) {
        this.nome = nome
        this.idade = idade
    }

    nome: string;
    idade: number | string;
    
    correr() {
        console.log('fugii')
    }
    
}

const mouse = new Mouse('rato', 'seis')

mouse.correr()
console.log(mouse.nome, mouse.idade)