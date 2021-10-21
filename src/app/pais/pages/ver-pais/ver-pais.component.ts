import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { switchMap, tap } from 'rxjs/operators';

import { PaisService } from '../../services/pais.service';

import { Country } from '../../interfaces/pais.interface';

@Component({
  selector: 'app-ver-pais',
  templateUrl: './ver-pais.component.html',
  styles: [
  ]
})
export class VerPaisComponent implements OnInit {


  // !: le indica a typescript que country puede ser nulo pero que lo trate como si tuviera data
  // country tiene null o undefined
  pais!: Country[];

  
  constructor( 
    private activatedRoute: ActivatedRoute, 
    private paisService: PaisService ) { }

  ngOnInit(): void {
  
    
// USANDO SWITCHMAP
this.activatedRoute.params
.pipe(
    switchMap( ({id}) => this.paisService.getPaisPorAlpha( id ) ),
    tap( console.log ) //tap es usado como forma corta de imprimir por consola
)
.subscribe( pais => {
  this.pais = pais;
  // console.log(pais);
});

// SIN USO SWITCHMAP
/*     this.activatedRoute.params
    .subscribe( ({ id }) => {
      console.log(id);
      

      this.paisService.getPaisPorAlpha( id )
      .subscribe( pais => {
        console.log(pais);
      });

    }); */

  }

}
