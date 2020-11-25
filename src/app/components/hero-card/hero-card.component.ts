import { Component, OnInit, Input, Output, EventEmitter, OnChanges, DoCheck} from '@angular/core';
// El Input prepara los componentes Hijos para recibir informacion del PADRE
import { Router } from '@angular/router'

@Component({
  selector: 'app-hero-card',
  templateUrl: './hero-card.component.html',
  styles: [
  ]
})
export class HeroCardComponent implements OnInit, OnChanges, DoCheck {

  ngDoCheck(){
    console.log('Evento DoCheck');
    
  }

  ngOnChanges(){
    console.log('Evento ngOnInit');
  }

Hero: any = {};
// Recibir informacion de un componente PADRE
@Input() PadreHero: any = {};
@Input() Index: number;

// Mandar informacion del hijo a un padre
@Output() selectedHero: EventEmitter<number>;

  constructor( private router: Router) { 
    console.log('Constructor de Card');
    
    this.selectedHero = new EventEmitter();
    console.log(this.PadreHero);
  }
  ngOnInit(): void {
    console.log('Evento ngOnInit');
    
  }

  Navegar(){
    this.router.navigate['/hero'], this.Index;
  }
}
