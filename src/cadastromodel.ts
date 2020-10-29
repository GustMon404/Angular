export abstract class Cadastro {
    tipo: string;
    titulo: string;
    descricao: string;
    ano: number;
    genero: string;
    star: number;


    constructor(tipo: string, titulo: string, descricao: string, ano: number, genero: string, star: number) {
        this.tipo = tipo;
        this.titulo = titulo;
        this.descricao = descricao;
        this.ano = ano;
        this.genero = genero;
        this.star = star;
     }
}

export class CadastroFilme extends Cadastro{
    duracao: string;
    constructor(tipo:string,titulo: string, descricao: string, ano: number, genero: string, duracao: string, star: number){
        super(tipo, titulo, descricao, ano, genero, star);
        this.duracao = duracao
    }
}

export class CadastroSerie extends Cadastro{
    temporada: number;
    constructor(tipo:string, titulo: string, descricao: string, ano: number, genero: string, temporada: number, star: number){
        super(tipo, titulo, descricao, ano, genero, star);
        this.temporada = temporada
    }
}