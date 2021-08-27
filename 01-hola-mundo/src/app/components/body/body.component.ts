import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.css']
})
export class BodyComponent  {


  frase: any = {
    mensaje: 'Un gran poder requiere una gran responsabilidad.',
    autor:   'BEN PARKER'
  }
  
  title: String = 'Consejos del Tío Ben.';
  mostrar: boolean = true;
  
  personajes: String[] = ['Spiderman','Venom','Dr.Octopus','Duende'];


}
