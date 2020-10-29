import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-catalogo',
  templateUrl: './catalogo.component.html',
  styleUrls: ['./catalogo.component.css']
})
export class CatalogoComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  
  @Input() cards = [];
  @Input() edita_card = null;

  @Output() excluir_card = new EventEmitter<any>();
  @Output() editar_card = new EventEmitter<any>();
  @Output() estrela_card = new EventEmitter<any>()

  excluir(item){
    this.excluir_card.emit(item)
  }

  editar(item){
    this.editar_card.emit(item)
  }

  estrela(star,item){
    this.estrela_card.emit({star: star,item:item})
  }
}
