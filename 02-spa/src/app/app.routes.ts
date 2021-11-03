import { RouterModule,Routes } from "@angular/router";
import { HomeComponent } from "./components/home/home.component";
import { AboutComponent } from "./components/about/about.component";
import { HeroesComponent } from "./components/heroes/heroes.component";
import { HeroeComponent } from "./components/heroe/heroe.component";
import { FindHeroComponent } from "./components/find-hero/find-hero.component";
import { CasaComponent } from "./components/casa/casa.component";

const APP_ROUTES: Routes = [
    {path: 'home',  component:  HomeComponent },
    {path: 'about', component:  AboutComponent },
    {path: 'heroes',component: HeroesComponent },
    {path: 'heroe/:id', component: HeroeComponent },
    {path: 'find-hero/:termino', component: FindHeroComponent },
    {path: 'casa/:termino', component: CasaComponent },
    {path: '**', pathMatch: 'full', redirectTo: 'home'}
];

export const APP_ROUTING = RouterModule.forRoot(APP_ROUTES);