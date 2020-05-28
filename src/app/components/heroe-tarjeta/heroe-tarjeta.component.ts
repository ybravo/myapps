import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Heroe } from '../../servicios/heroes.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-heroe-tarjeta',
  templateUrl: './heroe-tarjeta.component.html',
})
export class HeroeTarjetaComponent implements OnInit {

  @Input() heroe : any = {};
  @Input () index : number;
  @Output () heroeSeleccionado : EventEmitter<number>

  constructor( private router: Router) {
    this.heroeSeleccionado = new EventEmitter();

   }

  ngOnInit(): void {
  }
 
  verHeroe(){
    this.heroeSeleccionado.emit(this.index);

  }
}
