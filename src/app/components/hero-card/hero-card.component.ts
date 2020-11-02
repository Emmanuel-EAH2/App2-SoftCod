import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
// El Input prepara los componentes Hijos para recibir informacion del PADRE
import { Router } from '@angular/router'

@Component({
  selector: 'app-hero-card',
  templateUrl: './hero-card.component.html',
  styles: [
  ]
})
export class HeroCardComponent implements OnInit {

Hero: any = {};
// Recibir informacion de un componente PADRE
@Input() PadreHero: any = {};
@Input() Index: number;

// Mandar informacion del hijo a un padre
@Output() selectedHero: EventEmitter<number>;

  constructor( private router: Router) { 
    this.selectedHero = new EventEmitter();
    console.log(this.PadreHero);
  }
  ngOnInit(): void {
  }

  Navegar(){
    this.router.navigate('/hero', this.Index)
  }
}
