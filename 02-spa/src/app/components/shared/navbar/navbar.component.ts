import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html'
})
export class NavbarComponent implements OnInit {

  constructor( private route: Router) { }

  ngOnInit(): void {
  }

  buscarHeroe(termino:string){

    if (termino === 'Dc'.toLowerCase() || termino === 'Marvel'.toLowerCase()) {
       
        this.route.navigate(['/casa',termino]);
        console.log(termino);
    
    }else{
      this.route.navigate(['/find-hero',termino]);
      console.log(termino);
    }  
  }

}
