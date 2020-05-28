import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HeroesService } from '../../servicios/heroes.service';





@Component({
  selector: 'app-buscador',
  templateUrl: './buscador.component.html',

})


export class BuscadorComponent implements OnInit {
  
 

  heroes :  any = {};
  termino : string;
  
  

  constructor( private _activateRoute : ActivatedRoute , private _heroesService : HeroesService, private router : Router) { }

  ngOnInit(): void {

    this._activateRoute.params.subscribe(params=> {
       this.termino = params ['termino'];
       this.heroes = this._heroesService.buscarHeroe(params ['termino']);
        console.log(this.heroes)
        // console.log(this.heroes.idx)
    })
    


  }

  verHeroe(idx:number){
    this.router.navigate(['/heroe', idx]);
    console.log(this.termino)

 }
}
