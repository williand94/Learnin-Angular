import { Component, OnInit } from '@angular/core';
import { HeroesService,Heroe } from "../../services/heroes.services";
import { ActivatedRoute } from "@angular/router";

@Component({
  selector: 'app-casa',
  templateUrl: './casa.component.html',
  styleUrls: ['./casa.component.css']
})
export class CasaComponent implements OnInit {

  heroes:any[] = []; 
  termino :String = "";

  constructor(private activatedRoute: ActivatedRoute,
              private _heroesService: HeroesService) { }

  ngOnInit(): void {

    this.activatedRoute.params.subscribe( params =>{
      this.termino = params['termino'];
      this.heroes= this._heroesService.getCasa(params['termino']);
      console.log(this.heroes);
    })
  }

}
