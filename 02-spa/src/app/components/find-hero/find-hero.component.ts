import { Component, OnInit } from '@angular/core';
import { Heroe, HeroesService } from "../../services/heroes.services";
import { ActivatedRoute } from "@angular/router";
import { Router } from "@angular/router";

@Component({
  selector: 'app-find-hero',
  templateUrl: './find-hero.component.html'
})
export class FindHeroComponent implements OnInit {

  heroes :any[] = [];
  termino:string = '';

  constructor(private activatedRoute: ActivatedRoute,
              private _heroesService: HeroesService,
              private router: Router  ) {}
  
  
  ngOnInit(): void {
    
    this.activatedRoute.params.subscribe( params =>{
      this.termino = params['termino'];
      this.heroes = this._heroesService.buscarHeroes(params['termino']);
      console.log(this.heroes); 
    });
    

  }

  verHeroe(idx:number){
    this.router.navigate( ['/heroe', idx] );
    console.log(idx);
  }

}
