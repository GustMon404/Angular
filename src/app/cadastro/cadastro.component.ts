import { Component, OnInit } from '@angular/core';
import { CadastroFilme, CadastroSerie } from 'src/cadastromodel';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.css']
})
export class CadastroComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    
  }
  titulo = null;
  descricao = null;
  tipo = null;
  genero = null;
  duracao = null;
  ano = null;
  temporadas = null;
  star = 0;

  editando = null;

  card_list = []

  salvar(): void{
    if (this.editando){
      this.editando.titulo = this.titulo;
      this.editando.descricao = this.descricao;
      this.editando.ano = this.ano;
      this.editando.genero = this.genero;
      this.editando.temporadas = this.temporadas;
      this.editando.star = this.star;
      this.editando.duracao = this.duracao;
    }
    else{
      if(this.tipo == 'filme'){
        const c = new CadastroFilme(this.tipo,
          this.titulo,
          this.descricao,
          this.ano,
          this.genero,
          this.duracao,
          this.star);
        this.card_list.push(c);
      }
      else if(this.tipo == 'serie'){
        const c = new CadastroSerie(this.tipo,
          this.titulo,
          this.descricao,
          this.ano,
          this.genero,
          this.temporadas,
          this.star);
        this.card_list.push(c);
      }
    }
    this.titulo =null, this.descricao=null,this.tipo=null, this.genero =null, this.ano =null,
    this.duracao =null, this.temporadas = null, this.editando = null, this.star = 0;
  }

  editar(item):void{
    this.titulo = item.titulo;
    this.descricao = item.descricao;
    this.genero = item.genero;
    this.duracao = item.duracao;
    this.ano = item.ano;
    this.temporadas = item.temporada;
    this.star = item.star;
    this.tipo = item.tipo

    this.editando = (item)
  }

  excluir(item):void{
    this.card_list.splice(this.card_list.indexOf(item),1)
  }

  cancelar(){
    this.titulo =null, this.descricao=null,this.tipo=null, this.genero =null, this.ano =null,
    this.duracao =null, this.temporadas = null, this.editando = null;
  }

  estrela(avaliacao){
    avaliacao.item.star = avaliacao.star
  }
}