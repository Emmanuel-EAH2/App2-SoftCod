import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { LOADIPHLPAPI } from 'dns';
import { HeroService } from 'src/app/services/Hero.services';

@Component({
  selector: 'app-buscador',
  templateUrl: './buscador.component.html',
  styleUrls: ['./buscador.component.css']
})
export class BuscadorComponent implements OnInit {

  constructor( private _aRouter: ActivatedRoute, private _heroService: HeroService) { }//injectamos el servicio y tendria que importalo automaticamente, sino hacerlo manualmente.

Resultados: any[]; //esta linea de codigo nos sirve para mandar a guardar el arreglo de los resultados hecho en Hero.services.ts

  //Cuando se termina de renderizar el componente
  ngOnInit(): void {
    //Obtener parametros de la ruta activa.
  this._aRouter.params.subscribe(params => {
    console.log(params ['termino']);
   this.Resultados = this._heroService.SearchHeros([params['termino']]);
   console.log(this.Resultados);
   }) //params es una propiedad y es un observable: y por ende nos debemos SUBSCRIBIR
  }
}
