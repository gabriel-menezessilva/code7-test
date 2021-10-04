export class Movie {
    nome: string;
    ano: number;
    diretor: string;
    descricao: string;
    poster: string;
    genero: string;

    constructor({ nome, ano, diretor, descricao, poster, genero }: Movie) {
        this.nome = nome;
        this.ano = ano;
        this.diretor = diretor;
        this.descricao = descricao;
        this.poster = poster;
        this.genero = genero;
    }
}
