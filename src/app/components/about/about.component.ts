import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html'
  
})
export class AboutComponent implements OnInit {

  constructor( ) {

    
   }

  ngOnInit(): void {


    type Operacion=(x: number, y:number)=>number;

    function operar(valor1: number, valor2: number, func: Operacion): number {
      return func(valor1, valor2);
    }
    
    console.log(operar(3, 7, (x: number,y: number): number => {
      return x+y;

    }))
    
    console.log(operar(3, 7, (x: number,y: number): number => {
      return x-y;
    }))
    
    console.log(operar(3, 7, (x: number,y: number): number => {
      return x*y;
    }))
    
    }
  }

  


