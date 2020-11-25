import { Component, OnInit, DoCheck, AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked, OnDestroy } from '@angular/core';
import { HeroService } from 'src/app/services/Hero.services';
import { Router } from '@angular/router';

// Decorador:
@Component({
  selector: 'app-heros',
  templateUrl: './heros.component.html',
  styleUrls: ['./heros.component.css']
})
export class HerosComponent implements OnInit, DoCheck, AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked, OnDestroy {

ngOnDestroy(){
  console.log('Destruccion!!!');
  
}  

ngAfterViewChecked(){
console.log('Evento AfterViewChecked');

}

ngAfterViewInit(){
  console.log('Evento AfterViewInit');
}  

ngAfterContentChecked(){
  console.log('Evento AfterContentChecked');
  
}

ngAfterContentInit(){
    console.log('Evento AfterContentInit');
  }

ngDoCheck(){
  console.log('Evento DoCheck');
  
}  

  constructor( private heroService: HeroService, private _aRouter: Router) { }

  ArrayHeros: any[] = []

  // Se ejecuta cuando se termina de renderizar el componente.
  ngOnInit(): void {
   this.ArrayHeros = this.heroService.getHeros();
  }

  Navegar(index){
    console.log(index);
    this._aRouter.navigate(['../hero',index])
  }

}