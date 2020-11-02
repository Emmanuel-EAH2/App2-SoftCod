import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

// componentes
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/shared/navbar/navbar.component';
import { FooterComponent } from './components/shared/footer/footer.component';
import { HomeComponent } from './components/home/home.component';
import { HerosComponent } from './components/heros/heros.component';
import { HeroComponent } from './components/hero/hero.component';
import { AboutComponent} from './components/about/about.component';


import{ RouterModule } from '@angular/router';
import { BuscadorComponent } from './components/buscador/buscador.component';
import { HeroCardComponent } from './components/hero-card/hero-card.component';
import { PipesComponent } from './components/pipes/pipes.component'

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    HomeComponent,
    HerosComponent,
    HeroComponent,
    AboutComponent,
    BuscadorComponent,
    HeroCardComponent,
    PipesComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot([
      {path: '', component: HomeComponent},
      {path: 'home', component: HomeComponent},
      {path: 'heros', component: HerosComponent},
      {path: 'about', component: AboutComponent},
      {path: 'hero/:id', component: HeroComponent},
      {path: 'results/:termino', component: BuscadorComponent}, //primero lo que quiero que se vea en mi ruta, segundo el componente a renderizar
      {path: '**',pathMatch: 'full', component: HomeComponent}
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
